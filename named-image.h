#ifndef NAMED_IMAGE_H
#define NAMED_IMAGE_H

#include "nan.h"

namespace NamedImage {

Nan::MaybeLocal<v8::Object> getImageNamed(const char * str, bool invert);

}

#endif  // NAMED_IMAGE_H
