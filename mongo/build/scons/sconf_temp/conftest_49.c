

#include <assert.h>

#ifdef __cplusplus
extern "C"
#endif
char fallocate();

int main() {
#if defined (__stub_fallocate) || defined (__stub___fallocate)
  fail fail fail
#else
  fallocate();
#endif

  return 0;
}
