
#if !defined(__clang__)
#error
#endif

#if defined(__apple_build_version__)
#if __apple_build_version__ < 5030040
#error clang 3.4 (or Apple XCode 5.1.1) or newer is required to build MongoDB
#endif
#elif (__clang_major__ < 3) || (__clang_major__ == 3 && __clang_minor__ < 4)
#error clang 3.4 (or Apple XCode 5.1.1) or newer is required to build MongoDB
#endif

int main(int argc, char* argv[]) {
    return 0;
}
