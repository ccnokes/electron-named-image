#include "nan.h"
#include "named-image.h"

using namespace Nan;
using namespace v8;

namespace {

NAN_METHOD(getImageNamed) {
  String::Utf8Value str(info[0]->ToString()); //first string arg
  bool invert(info[1]->BooleanValue()); //second bool arg
  Nan::MaybeLocal<v8::Object> iconBuff = NamedImage::getImageNamed(*str, invert);
  info.GetReturnValue().Set(iconBuff.ToLocalChecked());
}

void Init(Handle<Object> exports) {
  Nan::SetMethod(exports, "getImageNamed", getImageNamed);
}

} // namespace


NODE_MODULE(NamedImage, Init)
