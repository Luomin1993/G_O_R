$ locate -i RcppArmadillo.h
/usr/local/lib/R/site-library/RcppArmadillo/include/RcppArmadillo.h

$ g++ -I/usr/share/R/include -DNDEBUG -I/usr/local/lib/R/site-library/Rcpp/include  -fpic  -g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Wformat-security -Werror=format-security -D_FORTIFY_SOURCE=2 -g  -c my.cpp -o my.o

$ gcc -Wall -I/home/hanss/dev/include -c example.c
$ gcc -L/home/hanss/dev/lib example.o -lgsl -lgslcblas -lm
$ ./a.out
$ g++ -Wall -I/usr/include/ -c test.cpp
$ g++ -L/usr/lib/ -lgsl -lgslcblas -lm test.o
$ g++ -L/usr/local/lib/ test.o -lgsl -lgslcblas -lm #更正		

$ g++ -Wall -o gsl_bessel gsl_bessel.c -lgsl -lgslcblas -lm #useful

$ gcc -I/usr/local/include/gsl -L/usr/local/lib -lgsl -lgslcblas gsl_test.c

#win
$ gcc -c test.c -Wall -I"C:\Program Files\GnuWin32\include"  -o test.o -L"C:\Program Files\GnuWin32\lib" -lgslcblas -lgsl -lm
$ gcc -o test.exe test.o -L"C:\Program Files\GnuWin32\lib" -lgslcblas -lgsl -lm

#ref
$ gcc -Wall -I/usr/local/include -c example.c
$ gcc -L/usr/local/lib example.o -lgsl -lgslcblas -lm
$ LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH  #my fix for "error while loading shared libraries: libgsl.so.19"
$ export LD_LIBRARY_PATH
$ ./a.out

#use std
$ gcc -L/usr/local/lib Model_1.o -lgsl -lgslcblas -lstdc++ -lm

$ cat vec_y0.csv | sed ':label;N;s/\n/,/;b label' > vec.csv