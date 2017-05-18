#ifndef NAMED_IMAGE_H
#define NAMED_IMAGE_H

#include "nan.h"

namespace NamedImage {

Nan::MaybeLocal<v8::Object> getImagedNamed(const char * str);

}

#endif  // NAMED_IMAGE_H
