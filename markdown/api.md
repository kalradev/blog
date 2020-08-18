# API Security Testing

## Enumeration
- API endpoints
  - from js files
  - brute force
- For a single endpoint
  - Check which header it accepts
  - Authorization token, cookies required or not
- Info gathering by causing errors
  - Supplying different type of parameter
  - Malformed data (JSON, XML)
  - Trying all methods
  - Basically sending data it isn't expecting
- Check HTML source for more info
- Identifying tech stack
  - Why? Maybe there will be pitfalls related to particular technology
 
## Techanical bugs
- [sqli](/blog/sqli)
- [xss](/blog/xss)
- [ssti](/blog/ssti)
- [rce](/blog/rce)
- [jwt](/blog/jwt)

## Logical bugs
- [idors](/blog/idor)


## Resources
### Github
- [31 days of API Security Tips](https://github.com/smodnix/31-days-of-API-Security-Tips)
### Blogs
- [Bug Bounty: Broken API Authorization](https://medium.com/bugbountywriteup/bug-bounty-broken-api-authorization-d30c940ccb42)
### Youtube
- [API Security 101 by Sadako](https://www.youtube.com/watch?v=ijalD2NkRFg)
- [Bad API, hAPI Hackers! by jr0ch17](https://www.youtube.com/watch?v=UT7-ZVawdzA)
- [Hidden in Plain Site: Disclosing Information via Your APIs - Peter Yaworski, Bugcrowd's LevelUp 2017](https://www.youtube.com/watch?v=jBi3a-dXsM8)
- [How To Do Recon: API Enumeration](https://www.youtube.com/watch?v=fvcKwUS4PTE)
- [Finding Your First Bug: Finding Bugs Using APIs](https://www.youtube.com/watch?v=yCUQBc2rY9Y)
- [OWASP API Security Top 10 Webinar](https://www.youtube.com/watch?v=zTkv_9ChVPY)
- [API Abuse – The Anatomy of An Attack](https://www.youtube.com/watch?v=RSBhj60PsUU)
- [A Hacker’s View of APIs](https://www.youtube.com/watch?v=pcfr63kN6BQ)
- [REST in Peace: Abusing GraphQL to Attack Underlying Infrastructure - LevelUp 0x05](https://www.youtube.com/watch?v=NPDp7GHmMa0)
## Labs
- [payatu/Tiredful-API](https://github.com/payatu/Tiredful-API/)
- [appsecco/dvcsharp-api](https://github.com/appsecco/dvcsharp-api)
- [snoopysecurity/dvws-node](https://github.com/snoopysecurity/dvws-node)
- [mattvaldes/vulnerable-api](https://github.com/mattvaldes/vulnerable-api)
