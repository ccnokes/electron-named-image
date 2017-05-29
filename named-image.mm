#include "named-image.h"
#include "nan.h"
#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>

using namespace Nan;

namespace NamedImage {

Nan::MaybeLocal<v8::Object> getImageNamed(const char * str, bool invert = false) {
  @autoreleasepool {
    // create namedImage
    NSImage * image = [NSImage imageNamed:[NSString stringWithUTF8String:str]];
    
    // copy buffer to NSData
    CGImageRef cgRef = [image CGImageForProposedRect:nil context:nil hints:nil];
    NSBitmapImageRep *newRep = [[NSBitmapImageRep alloc] initWithCGImage:cgRef];
    [newRep setSize:[image size]]; // keep the same resolution
    NSData * pngData = [newRep representationUsingType:NSPNGFileType properties:[[NSDictionary alloc] init]];
    
    if(invert) {
      // color inversion code from https://stackoverflow.com/questions/2137744/draw-standard-nsimage-inverted-white-instead-of-black
      CIImage *ciImage = [[CIImage alloc] initWithData:pngData];
      CIFilter *filter = [CIFilter filterWithName:@"CIColorInvert"];
      [filter setDefaults];
      [filter setValue:ciImage forKey:@"inputImage"];
      CIImage *output = [filter valueForKey:@"outputImage"];
      

      NSCIImageRep *imageRep = [NSCIImageRep imageRepWithCIImage:output];
      NSImage *_image = [[NSImage alloc] initWithSize:[imageRep size]];
      [_image addRepresentation:imageRep];
      
      CGImageRef cgRef2 = [_image CGImageForProposedRect:nil context:nil hints:nil];
      NSBitmapImageRep *newRep2 = [[NSBitmapImageRep alloc] initWithCGImage:cgRef2];
      pngData = [newRep2 representationUsingType:NSPNGFileType properties:[[NSDictionary alloc] init]];
    }
    
    unsigned int length = [pngData length];

    // return PNG buffer
    return Nan::CopyBuffer((char *) [pngData bytes], length);
  }
}

} //end namespace