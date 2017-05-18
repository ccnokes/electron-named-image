#include "named-image.h"
#include "nan.h"
#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>

using namespace Nan;

namespace NamedImage {

Nan::MaybeLocal<v8::Object> getImagedNamed(const char * str) {
  @autoreleasepool {
    // create namedImage
    NSImage * image = [NSImage imageNamed:[NSString stringWithUTF8String:str]];
    
    // copy buffer to NSData
    CGImageRef cgRef = [image CGImageForProposedRect:nil context:nil hints:nil];
    NSBitmapImageRep *newRep = [[NSBitmapImageRep alloc] initWithCGImage:cgRef];
    [newRep setSize:[image size]]; // keep the same resolution
    NSData * pngData = [newRep representationUsingType:NSPNGFileType properties:[[NSDictionary alloc] init]];
    unsigned int length = [pngData length];

    // return PNG buffer
    return Nan::CopyBuffer((char *) [pngData bytes], length);
  }
}

} //end namespace