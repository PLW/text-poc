

#include <assert.h>

#ifdef __cplusplus
extern "C"
#endif
char strnlen();

int main() {
#if defined (__stub_strnlen) || defined (__stub___strnlen)
  fail fail fail
#else
  strnlen();
#endif

  return 0;
}
