#!/bin/bash
echo "$1" > code.c
gcc code.c -o code
if [ $? -eq 0 ]; then
   ./code
else
   echo "Compilation Error"
fi