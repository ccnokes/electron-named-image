#include "named-image.h"
#include "nan.h"

using namespace Nan;

namespace NamedImage {

// just return an empty buffer on unsupported platforms
Nan::MaybeLocal<v8::Object> getImageNamed(const char * str, bool invert = false) {
  return Nan::NewBuffer(0);
}

} //end namespace