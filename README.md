## Details
This is a small project that to build a Resume on AWS as a static website.
You can use AWS amplify , or S3 with Route 53 ,ACM , Cloud front.

## If you want to use many services and get your hands dirty with AWS services, Choose the second approach to implement it.
## Here are the steps when using the second appraoch:
1. Create AWS S3 bucket (make sure to make the name of S3 as the name of your purchased domain)
2. Make it public and add a permission to it, to make it allow public read access.
3. Enable static host website and upload the source code files.
4. Create a DNS Record for the bucket.
5. Create certificate for it from ACM. (note create it in us-east-1 region)
6. Create cloud front and relate it to the S3.
7. Modify the DNS record to point to the cloud front.

## Reference :
- https://www.youtube.com/watch?v=NiCZSdWucZE&list=PLwyXYwu8kL0wMalR9iXJIPfiMYWNFWQzx&index=6
