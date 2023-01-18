const S3 = require('aws-sdk/clients/s3');
const {S3_BUCKET_REGION, S3_ACCESS_KEY, S3_SECRET_KEY, S3_BUCKET_NAME} = require("../config/config");

const s3Bucket = new S3 ({
    region: S3_BUCKET_REGION,
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY
});

async function uploadPublicFile() {

    return s3Bucket.upload({
        // ContentType: '',
        ACL: "public-read",
        Body: 'data',
        Bucket: S3_BUCKET_NAME,
        Key: 'images/2023/winter.jpg'
    }).promise()
}