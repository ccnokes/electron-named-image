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

NAN_MODULE_INIT(Init) {
   Nan::Set(
    target, New<v8::String>("getImageNamed").ToLocalChecked(),
    GetFunction(New<v8::FunctionTemplate>(getImageNamed)).ToLocalChecked()
  );
}

} // namespace


NODE_MODULE(NamedImage, Init)
