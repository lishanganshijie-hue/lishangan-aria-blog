import boto3
from botocore.config import Config
from app.core.config import settings # 确保你的 config.py 读了我们配的 S3 变量

# 🟢 初始化 Cloudflare R2 客户端 (利用 S3 协议)
r2_client = boto3.client(
    's3',
    endpoint_url=settings.S3_ENDPOINT_URL,
    aws_access_key_id=settings.S3_ACCESS_KEY_ID,
    aws_secret_access_key=settings.S3_SECRET_ACCESS_KEY,
    config=Config(signature_version='s3v4'),
    region_name='auto' # Cloudflare R2 固定填 auto
)

async def upload_file_to_r2(file_data: bytes, file_name: str, content_type: str) -> str:
    """上传文件到 Cloudflare R2 并返回公开访问的 URL"""
    bucket_name = settings.S3_BUCKET_NAME
    
    # 执行异步/线程上传
    r2_client.put_object(
        Bucket=bucket_name,
        Key=file_name,
        Body=file_data,
        ContentType=content_type
    )
    
    # 🔗 拼装出 Cloudflare R2 的公开 CDN 加速链接返回给前端 Vue3/Astro
    return f"{settings.S3_PUBLIC_URL.rstrip('/')}/{file_name}"