#!/bin/bash




curl -s https://api.github.com/users/{$1} | grep -m 1 'name' | cut -d '"' -f 4
 
curl -s https://api.github.com/users/{$1} | grep "bio" | cut -d '"' -f 4

curl -s https://api.github.com/users/{$1} | grep "location" | cut -d '"' -f 4

curl -s https://api.github.com/users/{$1} | grep "blog" | cut -d '"' -f 4

