# domain-masscan

A wrapper around masscan that let you scan domains.
Just give it the domain name in a list.
It will try to get all the ip addresses of domains, handle error if any.
Will provide a file with domain to ipaddress mapping.

![ASDF](/blogs/test/test.jpg)

Then pass the ipaddresses file to masscan to scan

```python
import base64
print(base64.b64decode(b'asdf'))
```