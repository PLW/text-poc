

#include <assert.h>

#ifdef __cplusplus
extern "C"
#endif
char sync_file_range();

int main() {
#if defined (__stub_sync_file_range) || defined (__stub___sync_file_range)
  fail fail fail
#else
  sync_file_range();
#endif

  return 0;
}
