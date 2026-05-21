---
layout: ../../layouts/post.astro
title: Python Wordpress Generate
description: 一个自动化项目发布工具，支持项目编号生成、图片处理、多平台文件上传和发布等功能，实现了完整的项目发布自动化流程。
dateFormatted: Jan 9th, 2026
---

## 灵感来源

Wordpress经常需要处理项目编号生成、图片制作、文件上传、多平台发布等繁琐工作。传统的手动操作方式效率低下，容易出错，且需要重复处理大量文件。因此，开发了一个完整的自动化项目发布工具，实现从项目处理到多平台发布的全流程自动化。

## 项目简介

Python Wordpress Generate 是一个功能强大的自动化项目发布工具，旨在简化项目发布流程，提升工作效率。系统采用 Python 开发，支持项目编号自动生成、图片和视频处理、多平台文件上传、WordPress 发布、视频平台发布等核心功能，大大提升了项目发布的效率和便捷性。

## 项目地址

该版本为公开版本 移除了敏感数据和静态资源，仅供参考
Github地址: https://github.com/2585570153/python_wordpress_generate


## 技术栈

### 核心技术栈

| 类型 | 技术/框架 | 说明 |
| ---- | ------------------- | --------------- |
| 语言 | Python 3.10+ | 主要开发语言 |
| 图像处理 | Pillow | 图像处理和生成 |
| 视频处理 | ffmpeg-python | 视频转码和处理 |
| 文件处理 | psd-tools | PSD文件处理 |
| 云存储 | cos-python-sdk-v5 | 腾讯云COS存储 |
| 云存储 | vod-python-sdk | 腾讯云点播服务 |
| 自动化 | Selenium | 浏览器自动化 |
| OCR识别 | rapidocr-onnxruntime | 图像文字识别 |
| AI对话 | OpenAI API | AI文本生成 |
| 文件上传 | python-wordpress-xmlrpc | WordPress发布 |
| 网络请求 | requests | HTTP请求库 |

### 集成平台

| 平台类型 | 平台名称 | 说明 |
| ---- | ------------------- | --------------- |
| 云存储 | 123云盘 | 文件存储和分享 |
| 云存储 | 阿里云盘 | 文件存储和分享 |
| 云存储 | 腾讯云COS | 对象存储服务 |
| 内容管理 | WordPress | 博客和内容发布 |
| 电商平台 | 闲管家 | 商品发布 |
| 视频平台 | 抖音 | 视频发布 |
| 视频平台 | 哔哩哔哩 | 视频发布 |

## 项目亮点

实现了从项目编号生成、文件处理、图片生成、文件上传到多平台发布的完整自动化流程，大大减少了人工操作，提升了工作效率。

支持多种项目类型（Java、Node.js、PHP、微信小程序）和多平台发布（WordPress、闲管家、抖音、B站），满足不同场景的项目发布需求。

内置图片生成、视频处理、PSD解析等功能，支持从Markdown文件自动生成图片、视频转码、水印添加、长图拼接等操作。

集成123云盘、阿里云盘、腾讯云COS等多种云存储服务，支持自动上传、文件管理和链接生成，确保文件安全可靠。

## 核心功能模块
- **项目编号生成**：自动生成唯一项目编号（格式：YYMMDDHHMMSS）
- **项目类型识别**：支持Java、Node.js、PHP、微信小程序等类型
- **文件夹管理**：自动重命名项目文件夹，添加编号前缀
- **文件夹大小检查**：检查项目文件夹大小，确保不超过限制（300MB）
- **Markdown转图片**：从README.md文件自动提取内容并生成图片
- **长图拼接**：将多张图片自动拼接成长图
- **图片文字添加**：在图片上添加标题和内容文字
- **PSD文件处理**：解析和处理PSD设计文件
- **图片压缩和优化**：自动压缩和优化图片文件
- **视频转码**：支持MP4格式转换
- **M3U8转换**：将视频转换为M3U8流媒体格式
- **视频水印**：自动添加水印和压缩视频
- **图片转视频**：将图片转换为竖屏视频
- **视频重命名**：自动重命名视频文件
- **123云盘上传**：自动上传文件到123云盘并生成分享链接
- **阿里云盘上传**：自动上传文件到阿里云盘并生成分享链接
- **腾讯云COS上传**：上传文件到腾讯云对象存储
- **文件信息保存**：自动保存文件信息到后端API
- **Token自动刷新**：自动检测和刷新云盘访问令牌
- **WordPress发布**：自动发布内容到WordPress网站
- **闲管家发布**：支持商品信息发布到闲管家平台
- **抖音发布**：自动上传视频到抖音平台
- **B站发布**：自动上传视频到哔哩哔哩平台
- **Chrome自动化**：基于Selenium实现浏览器自动化操作
- **OCR识别**：图像文字识别功能
- **AI对话**：集成SiliconFlow和OpenAI API，支持AI文本生成
- **随机码生成**：生成随机验证码和提取码
- **目录树生成**：生成项目目录树结构图
- **ZIP压缩**：自动压缩项目文件夹
- **桌面路径获取**：获取系统桌面路径

## 目录结构

```
adymw_generate_img/
├── main.py                    # 主程序入口
├── requirements.txt           # 项目依赖
├── .env                       # 环境变量配置（需自行创建）
├── api/                       # API接口
│   └── info_api.py           # 文件信息保存API
├── publisher/                 # 发布器模块
│   ├── base_publisher.py     # 基础发布器
│   ├── java_publisher.py     # Java项目发布器
│   ├── nodejs_publisher.py   # Node.js项目发布器
│   ├── php_publisher.py      # PHP项目发布器
│   └── wxapp_publisher.py    # 微信小程序发布器
├── utils/                     # 工具类
│   ├── aliyundrive.py        # 阿里云盘工具
│   ├── bilibili_util.py      # B站上传工具
│   ├── chrome_toolkit.py     # Chrome自动化工具
│   ├── cos_util.py           # 腾讯云COS工具
│   ├── desktop_util.py       # 桌面路径工具
│   ├── douyin_util.py        # 抖音上传工具
│   ├── ftp_util.py           # FTP工具
│   ├── goofish_util.py       # 闲管家API工具
│   ├── image_util.py         # 图片处理工具
│   ├── mov_util.py           # 视频处理工具
│   ├── ocr.py                # OCR识别工具
│   ├── pan123.py             # 123云盘工具
│   ├── psd_processor.py      # PSD处理工具
│   ├── random_util.py        # 随机码生成工具
│   ├── siliconflow_chat.py   # SiliconFlow AI工具
│   ├── text_to_image.py      # 文本转图片工具
│   ├── tree_util.py          # 目录树工具
│   ├── unified_video_uploader.py  # 统一视频上传器
│   ├── vod_util.py           # 腾讯云点播工具
│   ├── wordpress_util.py     # WordPress工具
│   └── zip_util.py           # ZIP压缩工具
├── assets/                    # 资源文件
│   ├── font/                 # 字体文件
│   ├── img/                  # 图片资源
│   ├── mov/                  # 视频资源
│   └── psd/                  # PSD设计文件
└── test/                      # 测试文件
    ├── cos_demo.py
    ├── pan123_test.py
    └── ...
```


## 核心工具类代码思路

### 1. 文本转图片工具 (text_to_image.py)

**功能说明**：从Markdown文件中提取指定章节内容，并自动生成带文字的图片。

**核心思路**：
1. 使用正则表达式解析Markdown文件，提取指定章节内容
2. 使用Pillow库在背景图片上绘制文字
3. 实现自动换行和动态调整图片高度

**关键代码片段**：

```python
def parse_readme_md(md_path, section_name):
    """解析 README.md 文件，提取指定部分的内容"""
    with open(md_path, 'r', encoding='utf-8') as md_file:
        content = md_file.read()
        
        # 定义标题映射，使用正则表达式匹配章节
        title_mapping = {
            "项目介绍": r"##\s*项目介绍\s*\n(.*?)(?=\n##|\Z)",
            "金额": r"##\s*金额\s*\n(.*?)(?=\n##|\Z)",
            # ... 更多映射
        }
        
        if section_name in title_mapping:
            pattern = title_mapping[section_name]
            match = re.search(pattern, content, re.DOTALL)
            if match:
                return match.group(1).strip()
```

```python
def add_text_to_image(image_path, output_path, title_text, content_text, font_dir, max_characters_per_line):
    """在图片上添加文字"""
    base_image = Image.open(image_path).convert("RGBA")
    draw = ImageDraw.Draw(base_image)
    
    # 加载字体
    title_font = ImageFont.truetype(title_font_path, size=60)
    content_font = ImageFont.truetype(content_font_path, size=40)
    
    # 逐字处理，实现自动换行
    for char in words:
        test_line = current_line + char
        bbox = draw.textbbox((content_x, content_y), test_line, font=content_font)
        line_width = bbox[2] - bbox[0]
        
        if line_width <= max_width:
            current_line = test_line
        else:
            if current_line:
                lines.append(current_line)
            current_line = char
    
    # 如果内容超出图片高度，动态扩展图片
    if required_height > base_image.height:
        new_image = Image.new("RGBA", (base_image.width, required_height), (244, 244, 244, 255))
        new_image.paste(base_image.crop((0, 0, base_image.width, content_y)), (0, 0))
        base_image = new_image
```

**技术要点**：
- 使用正则表达式的`re.DOTALL`模式匹配多行内容
- 通过`textbbox`计算文字宽度，实现精确的自动换行
- 动态调整图片高度，确保所有内容都能显示

---

### 2. ZIP压缩工具 (zip_util.py)

**功能说明**：将项目文件夹压缩为ZIP包，并可选择创建自解压EXE文件。

**核心思路**：
1. 使用Python的zipfile模块创建ZIP文件
2. 调用7-Zip或WinRAR命令行工具创建自解压EXE
3. 保持文件夹的相对路径结构

**关键代码片段**：

```python
def zip_folder_to_desktop(folder_name, create_exe=False, exe_type="winrar"):
    """将指定名称的文件夹压缩为ZIP包"""
    desktop_path = get_desktop_path()
    folder_path = os.path.join(desktop_path, folder_name)
    zip_path = os.path.join(desktop_path, f"{folder_name}.zip")
    
    # 创建ZIP文件，保持相对路径结构
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                # 在ZIP中保持相对路径结构
                relative_path = os.path.relpath(file_path, folder_path)
                zipf.write(file_path, relative_path)
    
    # 如果需要创建自解压EXE
    if create_exe:
        if exe_type == "winrar":
            exe_path = create_winrar_sfx(zip_path, folder_name)
        elif exe_type == "7zip":
            exe_path = create_7zip_sfx(zip_path, folder_name)
    
    return zip_path, exe_path
```

```python
def create_winrar_sfx(zip_path, output_name):
    """使用WinRAR创建自解压exe文件"""
    winrar_path = os.path.join(base_dir, "lib", "WinRAR", "WinRAR.exe")
    
    subprocess.run([
        winrar_path,
        "a",           # 添加文件
        "-sfx",        # 创建自解压文件
        "-r",          # 递归处理
        "-ep1",        # 排除基本路径
        "-m5",         # 最大压缩率
        "-y",          # 自动确认
        exe_path,
        zip_path
    ], check=True)
```

**技术要点**：
- 使用`os.path.relpath`保持ZIP内的相对路径结构
- 通过`subprocess.run`调用外部压缩工具
- 支持多种压缩工具（7-Zip、WinRAR）的切换

---

### 3. 123云盘工具 (pan123.py)

**功能说明**：封装123云盘API，实现文件上传、分享链接生成等功能。

**核心思路**：
1. 实现统一的响应数据类`DataResponse`处理API返回
2. 封装文件上传的分片上传逻辑
3. 实现分享链接的创建和直链签名

**关键代码片段**：

```python
class DataResponse:
    """服务器返回数据类，统一处理API响应"""
    def __init__(self, response=None, code=0, message="", data=None):
        if response is None:
            self.response_data = {
                "code": code,
                "message": message,
                "data": data,
                "x-traceID": ""
            }
            return
        self.response = response
        self.response_data = response.json()
    
    @property
    def success(self):
        """判断请求是否成功"""
        return self.response_data.get('code') == 0
```

```python
def get_direct_signed_link(url, uid, primary_key, expired_time_sec):
    """进行直链鉴权，生成带签名的下载链接"""
    path = urllib.parse.urlparse(url).path
    # 下载链接的过期时间戳（秒）
    timestamp = int(time.time()) + expired_time_sec
    # 生成随机数（使用UUID，不能包含中划线）
    random_uuid = str(uuid.uuid4()).replace('-', '')
    # 待签名字符串="URI-timestamp-rand-uid-PrivateKey"
    unsigned_str = f'{path}-{timestamp}-{random_uuid}-{uid}-{primary_key}'
    auth_key = f'{timestamp}-{random_uuid}-{uid}-' + hashlib.md5(unsigned_str.encode()).hexdigest()
    return url + '?auth_key=' + auth_key
```

**技术要点**：
- 使用MD5哈希算法生成签名，确保链接安全性
- 实现时间戳过期机制，控制链接有效期
- 统一的数据响应类便于错误处理和调试

---

### 4. 阿里云盘工具 (aliyundrive.py)

**功能说明**：封装阿里云盘API，实现OAuth授权、文件上传、分享链接生成。

**核心思路**：
1. 实现OAuth 2.0授权流程获取access_token
2. 自动检测token失效并刷新
3. 实现大文件分片上传

**关键代码片段**：

```python
def get_access_token():
    """获取阿里云盘的 access_token"""
    client_id = os.getenv("ALIYUN_ID")
    client_secret = os.getenv("ALIYUN_SECRET")
    code = os.getenv("ALIYUN_CODE")
    
    url = BaseURL.GET_ACCESS_TOKEN
    data = {
        'client_id': client_id,
        'client_secret': client_secret,
        'code': code,
        'grant_type': 'authorization_code',
        'code_verifier': 'ad',
    }
    
    response = requests.post(url, data=data)
    response_data = response.json()
    
    # 更新.env文件中的ALIYUN_TOKEN
    if response_data.get('access_token'):
        env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
        set_key(env_path, "ALIYUN_TOKEN", str(response_data.get('access_token')))
        return response_data.get('access_token')
```

```python
def get_code_url():
    """获取OAuth授权URL"""
    client_id = os.getenv("ALIYUN_ID")
    url = f'https://openapi.alipan.com/oauth/authorize?client_id={client_id}&redirect_uri=oob&scope=user:base,file:all:read,file:all:write,file:share:write&code_challenge=ad&code_challenge_method=plain'
    return url
```

**技术要点**：
- 使用`python-dotenv`的`set_key`自动更新环境变量
- 实现OAuth 2.0的授权码模式
- Token自动刷新机制，提升用户体验

---

### 5. Chrome自动化工具 (chrome_toolkit.py)

**功能说明**：封装Chrome浏览器和WebDriver的管理，实现浏览器自动化操作。

**核心思路**：
1. 使用项目本地的Chrome浏览器，避免版本冲突
2. 通过Chrome DevTools Protocol实现浏览器控制
3. 自动管理Chrome进程生命周期

**关键代码片段**：

```python
class ChromeToolkit:
    """Chrome工具包 - 整合所有Chrome相关功能"""
    
    def __init__(self, debugger_address="127.0.0.1:5003", auto_cleanup=True):
        self.debugger_address = debugger_address
        self.project_root = Path(__file__).parent.parent
        self.chrome_path = None
        self.chrome_process = None
    
    def _find_chrome_executable(self) -> str:
        """查找项目本地Chrome可执行文件路径"""
        local_chrome_paths = [
            os.path.join(self.project_root, "lib", "chrome-win64", "chrome.exe"),
            os.path.join(self.project_root, "lib", "chrome-headless-shell-win64", "chrome-headless-shell.exe"),
        ]
        
        for path in local_chrome_paths:
            if os.path.exists(path):
                return path
        
        raise FileNotFoundError("未找到项目本地Chrome浏览器")
```

```python
def start_chrome(self):
    """启动Chrome浏览器"""
    chrome_path = self._find_chrome_executable()
    
    # 启动Chrome，使用远程调试端口
    self.chrome_process = subprocess.Popen([
        chrome_path,
        f"--remote-debugging-port={self.debugger_address.split(':')[1]}",
        "--no-first-run",
        "--no-default-browser-check",
        "--disable-blink-features=AutomationControlled",
    ])
```

**技术要点**：
- 使用项目本地Chrome，避免系统Chrome版本不匹配问题
- 通过`--remote-debugging-port`实现浏览器控制
- 自动清理Chrome进程，避免资源泄漏

---

### 6. WordPress发布工具 (wordpress_util.py)

**功能说明**：通过XML-RPC协议发布内容到WordPress网站。

**核心思路**：
1. 使用`python-wordpress-xmlrpc`库实现WordPress API调用
2. 支持多站点配置和切换
3. 实现媒体文件上传和文章发布

**关键代码片段**：

```python
class WordPressPublisher:
    """增强版WordPress发布工具，支持多站点发布"""
    
    def __init__(self, site_index: int = 0):
        """初始化WordPress发布器"""
        load_dotenv()
        self.site_index = site_index
        self._load_site_config()
        self._init_client()
    
    def _load_site_config(self):
        """加载WordPress站点配置"""
        site_count = int(os.getenv("WP_SITE_COUNT"))
        self.wp_url = os.getenv(f"WP_URL_{self.site_index}")
        self.wp_username = os.getenv(f"WP_USERNAME_{self.site_index}")
        self.wp_password = os.getenv(f"WP_PASSWORD_{self.site_index}")
```

```python
def upload_media(self, file_path: str, max_retries: int = 3) -> Optional[Dict]:
    """上传媒体文件（图片或视频）并返回ID和URL"""
    retries = 0
    while retries < max_retries:
        try:
            with open(file_path, 'rb') as f:
                file_data = f.read()
                
            data = self.client.call(UploadFile({
                'name': os.path.basename(file_path),
                'type': self._get_mime_type(file_path),
                'bits': xmlrpc_client.Binary(file_data),
                'overwrite': True
            }))
            
            return {
                'id': data['id'],
                'url': data['url']
            }
        except Exception as e:
            retries += 1
            if retries >= max_retries:
                raise
            time.sleep(retry_delay)
```

**技术要点**：
- 使用XML-RPC协议与WordPress通信
- 实现重试机制，提高上传成功率
- 支持多站点配置，便于批量发布

---

### 7. 视频处理工具 (mov_util.py)

**功能说明**：使用ffmpeg进行视频转码、水印添加、M3U8转换等操作。

**核心思路**：
1. 使用`ffmpeg-python`封装ffmpeg命令
2. 实现视频分辨率统一和填充
3. 支持多视频拼接和格式转换

**关键代码片段**：

```python
def watermark_compress_ffmpeg(watermark_text, videos, output_file, ffmpeg_path, bitrate="500k", target_resolution="1920x1080"):
    """视频水印和压缩处理"""
    ts_files = []
    
    try:
        # 遍历视频，处理水印和TS转换
        for idx, video in enumerate(videos):
            video_path = os.path.abspath(video).replace('\\', '/')
            ts_file = video_path.rsplit('.', 1)[0] + ".ts"
            
            # 先等比缩放，再填充留白边到统一分辨率，避免画面拉伸
            vf_filter = (
                f"scale={target_width}:{target_height}:force_original_aspect_ratio=decrease,"
                f"pad={target_width}:{target_height}:({target_width}-iw)/2:({target_height}-ih)/2:white"
            )
            
            # 转为TS格式
            ffmpeg.input(video_path).output(
                ts_file,
                vcodec='libx264',
                acodec='aac',
                vf=vf_filter,
                format='mpegts'
            ).run(cmd=ffmpeg_path, capture_stdout=True, capture_stderr=True)
            
            ts_files.append(ts_file)
        
        # 创建concat文件，拼接TS文件
        with open(concat_file, 'w', encoding='utf-8') as f:
            for ts_file in ts_files:
                f.write(f"file '{ts_file}'\n")
        
        # 拼接TS文件为MP4
        output_path = os.path.join(output_file, watermark_text + ".mp4")
        ffmpeg.input(concat_file, format='concat', safe=0).output(
            output_path, c='copy', bitrate=bitrate
        ).run(cmd=ffmpeg_path, capture_stdout=True, capture_stderr=True)
        
        return output_path
    finally:
        # 清理中间文件
        for ts_file in ts_files:
            if os.path.exists(ts_file):
                os.remove(ts_file)
```

**技术要点**：
- 使用`force_original_aspect_ratio=decrease`保持视频宽高比
- 通过`pad`滤镜填充白色边距，统一分辨率
- 使用TS格式进行视频拼接，避免重新编码

---

### 8. 目录树生成工具 (tree_util.py)

**功能说明**：生成项目目录树结构，并转换为图片。

**核心思路**：
1. 递归遍历目录结构
2. 使用树形字符（├─、└─、│）格式化输出
3. 将文本目录树转换为图片

**关键代码片段**：

```python
def print_tree(base_path, ignore=None, prefix="", is_root=True, output_list=None):
    """打印目录树，并将结果存储到列表中"""
    if output_list is None:
        output_list = []
    
    # 如果是根目录，添加根目录名
    if is_root:
        root_name = os.path.basename(base_path)
        output_list.append(root_name)
    
    entries = sorted(os.listdir(base_path))
    entries = [entry for entry in entries if entry not in ignore]
    
    for i, entry in enumerate(entries):
        entry_path = os.path.join(base_path, entry)
        
        # 判断文件夹或文件的连接符
        connector = "└─ " if i == len(entries) - 1 else "├─ "
        
        # 添加文件或文件夹的名称到输出列表
        output_list.append(prefix + connector + entry)
        
        # 如果是文件夹，递归调用函数来处理子目录
        if os.path.isdir(entry_path):
            new_prefix = prefix + ("    " if i == len(entries) - 1 else "│   ")
            print_tree(entry_path, ignore, new_prefix, is_root=False, output_list=output_list)
    
    return output_list
```

**技术要点**：
- 使用递归算法遍历目录树
- 通过前缀字符串控制树形结构的缩进
- 区分最后一个节点使用不同的连接符

---

### 9. 随机码生成工具 (random_util.py)

**功能说明**：生成指定格式的随机验证码和提取码。

**核心思路**：
1. 使用Python的`random`模块生成随机字符
2. 支持自定义格式（数字+字母的组合）
3. 提供批量生成功能

**关键代码片段**：

```python
class RandomCodeGenerator:
    """随机代码生成工具类"""
    
    @staticmethod
    def generate_single_code() -> str:
        """生成单个随机代码，格式为：数字+字母+数字+字母（如2k9b）"""
        num_part = str(random.randint(1, 9))
        letter_part1 = random.choice(string.ascii_lowercase)
        num_part2 = str(random.randint(0, 9))
        letter_part2 = random.choice(string.ascii_lowercase)
        return f"{num_part}{letter_part1}{num_part2}{letter_part2}"
    
    @staticmethod
    def generate_custom_code(number_digits: int = 1, letter_count: int = 1, parts: int = 2) -> str:
        """生成自定义格式的随机代码"""
        code = []
        for i in range(parts):
            if i % 2 == 0:  # 数字部分
                num = random.randint(0, 9)
                code.append(str(num))
            else:  # 字母部分
                letters = ''.join(random.choice(string.ascii_lowercase) for _ in range(letter_count))
                code.append(letters)
        return ''.join(code)
```

**技术要点**：
- 使用`string.ascii_lowercase`获取小写字母
- 通过模运算实现数字和字母的交替生成
- 提供灵活的配置参数，支持多种格式

---

### 10. 腾讯云COS工具 (cos_util.py)

**功能说明**：封装腾讯云COS SDK，实现文件上传和下载链接生成。

**核心思路**：
1. 使用官方SDK初始化COS客户端
2. 实现大文件分片上传
3. 生成带签名的临时下载链接

**关键代码片段**：

```python
class CosUtil:
    """腾讯云COS工具类"""
    
    def __init__(self, secret_id: str, secret_key: str, region: str, bucket: str, token: str = None, domain: str = None):
        self.config = CosConfig(
            Region=region, 
            SecretId=secret_id, 
            SecretKey=secret_key, 
            Token=token, 
            Domain=domain
        )
        self.client = CosS3Client(self.config)
    
    def upload_file(self, local_path: str, cos_path: str = None, content_type: str = None) -> str:
        """上传本地文件到COS"""
        response = self.client.upload_file(
            Bucket=self.bucket,
            LocalFilePath=local_path,
            Key=cos_path,
            PartSize=10,        # 分片大小10MB
            MAXThread=10,       # 最大并发线程数
            progress_callback=self._progress
        )
        return response['ETag']
    
    def get_download_url(self, cos_path: str, expire: int = 3600) -> str:
        """获取COS文件的下载链接（带签名，默认1小时有效）"""
        url = self.client.get_presigned_download_url(
            Bucket=self.bucket,
            Key=cos_path,
            Expired=expire
        )
        return url
```

**技术要点**：
- 使用分片上传提高大文件上传效率
- 通过`progress_callback`实现上传进度监控
- 生成带签名的临时链接，控制访问权限

---

### 11. 统一视频上传器 (unified_video_uploader.py)

**功能说明**：统一管理多个视频平台的上传，只启动一次浏览器，依次上传到抖音和B站。

**核心思路**：
1. 复用同一个Chrome浏览器实例，避免重复启动
2. 通过不同的调试端口区分不同平台
3. 统一管理上传流程和错误处理

**关键代码片段**：

```python
class UnifiedVideoUploader:
    """统一视频上传器 - 只启动一次浏览器，依次上传到多个平台"""
    
    def __init__(self, debugger_address="127.0.0.1:5003"):
        self.debugger_address = debugger_address
        self.chrome_toolkit = None
    
    def init_browser(self):
        """初始化浏览器（只启动一次）"""
        self.chrome_toolkit = ChromeToolkit(
            debugger_address=self.debugger_address,
            auto_cleanup=True
        )
        if not self.chrome_toolkit.start_chrome():
            raise Exception("Chrome启动失败")
    
    def upload_to_douyin(self, video_path, title, description=""):
        """上传视频到抖音"""
        # 创建抖音上传器（不自动启动Chrome，使用已存在的浏览器）
        self.douyin_uploader = DouYinUploader(
            debugger_address=self.debugger_address,
            auto_start_chrome=False  # 关键：不自动启动Chrome
        )
        success, result = self.douyin_uploader.upload_video(
            video_path=video_path,
            title=title,
            description=description
        )
        # 关闭driver但不关闭Chrome进程
        self.douyin_uploader.close()
        return success, result
```

**技术要点**：
- 通过`auto_start_chrome=False`参数复用已有浏览器实例
- 统一管理浏览器生命周期，提升上传效率
- 支持多平台顺序上传，减少资源占用

---

### 12. SiliconFlow AI工具 (siliconflow_chat.py)

**功能说明**：封装SiliconFlow平台的AI聊天API，兼容OpenAI API格式。

**核心思路**：
1. 使用OpenAI官方库，通过base_url切换API端点
2. 支持流式输出和批量请求
3. 自动处理响应格式转换

**关键代码片段**：

```python
class SiliconFlowChatModel:
    """SiliconFlow平台聊天模型服务（使用OpenAI库）"""
    
    def __init__(self, api_key=None, base_url=None, model=None):
        self.api_key = api_key or os.getenv("SILICONFLOW_API_KEY")
        self.base_url = base_url or "https://api.siliconflow.cn/v1"
        self.default_model = model or "deepseek-ai/DeepSeek-V3.2"
        
        # 初始化OpenAI客户端（使用SiliconFlow的base_url）
        self.client = OpenAI(
            api_key=self.api_key,
            base_url=self.base_url,
        )
    
    def chat(self, messages, model=None, stream=False, temperature=None, max_tokens=None):
        """发送聊天请求"""
        response = self.client.chat.completions.create(
            model=model or self.default_model,
            messages=messages,
            stream=stream,
            temperature=temperature,
            max_tokens=max_tokens
        )
        return response.choices[0].message.content
```

**技术要点**：
- 使用OpenAI库的标准接口，兼容性好
- 通过`base_url`参数切换不同的AI服务提供商
- 支持多种模型切换和参数配置

---

### 13. 抖音上传工具 (douyin_util.py)

**功能说明**：基于Selenium实现抖音视频自动上传功能。

**核心思路**：
1. 使用Chrome调试模式连接浏览器
2. 模拟用户操作完成视频上传流程
3. 处理各种异常情况和重试机制

**关键代码片段**：

```python
class DouYinUploader:
    """抖音视频上传器"""
    
    def __init__(self, debugger_address="127.0.0.1:5005", auto_start_chrome=True):
        self.debugger_address = debugger_address
        self.auto_start_chrome = auto_start_chrome
        self.chrome_toolkit = ChromeToolkit(
            debugger_address=debugger_address,
            auto_cleanup=auto_start_chrome
        )
        self.upload_url = "https://creator.douyin.com/creator-micro/content/upload"
    
    def upload_video(self, video_path, title, description=""):
        """上传视频到抖音"""
        # 重置并初始化driver，确保使用干净的浏览器会话
        self._reset_and_init_driver()
        
        # 访问上传页面
        self.driver.get(self.upload_url)
        
        # 等待并点击上传按钮
        upload_button = self.wait.until(
            EC.element_to_be_clickable((By.XPATH, "//input[@type='file']"))
        )
        upload_button.send_keys(video_path)
        
        # 填写标题和描述
        title_input = self.wait.until(
            EC.presence_of_element_located((By.XPATH, "//input[@placeholder='添加作品标题']"))
        )
        title_input.send_keys(title)
        
        # 提交发布
        submit_button = self.wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), '发布')]"))
        )
        submit_button.click()
        
        return True, "上传成功"
```

**技术要点**：
- 使用`_reset_and_init_driver()`确保每次上传使用干净的浏览器会话
- 通过XPath定位元素，适应页面结构变化
- 实现完整的等待机制，确保元素加载完成

---

### 14. B站上传工具 (bilibili_util.py)

**功能说明**：基于Selenium实现B站视频自动上传功能。

**核心思路**：
1. 复用Chrome工具包实现浏览器控制
2. 处理B站特有的上传流程（分类选择、标签设置等）
3. 支持账号信息收集和验证

**关键代码片段**：

```python
class BilibiliUploader:
    """B站视频上传器"""
    
    def __init__(self, debugger_address="127.0.0.1:5003", auto_start_chrome=True):
        self.debugger_address = debugger_address
        self.chrome_toolkit = ChromeToolkit(
            debugger_address=debugger_address,
            auto_cleanup=auto_start_chrome
        )
        self.upload_url = "https://member.bilibili.com/platform/upload/video/frame"
    
    def upload_video(self, video_path, title, description="", tags=None, category=None):
        """上传视频到B站"""
        self._reset_and_init_driver()
        self.driver.get(self.upload_url)
        
        # 上传视频文件
        file_input = self.wait.until(
            EC.presence_of_element_located((By.XPATH, "//input[@type='file']"))
        )
        file_input.send_keys(video_path)
        
        # 等待上传完成
        self.wait.until(
            EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'upload-success')]"))
        )
        
        # 填写标题和描述
        title_input = self.wait.until(
            EC.presence_of_element_located((By.XPATH, "//input[@placeholder='请输入视频标题']"))
        )
        title_input.send_keys(title)
        
        # 设置分类和标签
        if category:
            category_select = self.driver.find_element(By.XPATH, f"//option[text()='{category}']")
            category_select.click()
        
        return True, "上传成功"
```

**技术要点**：
- 处理B站复杂的分类和标签选择逻辑
- 支持视频封面设置和分区选择
- 实现上传进度监控和状态检查

---

### 15. 桌面路径工具 (desktop_util.py)

**功能说明**：获取系统桌面路径，支持自定义盘符配置。

**核心思路**：
1. 通过环境变量配置桌面所在盘符
2. 兼容Windows路径格式
3. 支持子路径拼接

**关键代码片段**：

```python
def get_desktop_path(sub_path=None):
    """
    获取桌面路径，支持自定义盘符（通过.env中的DESKTOP_DRIVE设置）
    :param sub_path: 桌面下的子路径（如项目名）
    :return: 完整桌面路径
    """
    load_dotenv()
    drive = os.getenv("DESKTOP_DRIVE", "C:")
    # 确保盘符有反斜杠（Windows路径要求）
    if not drive.endswith(os.sep) and not drive.endswith("\\"):
        drive = drive + os.sep
    # 兼容Windows路径
    base = os.path.join(drive, "Users", os.getlogin(), "Desktop")
    # 规范化路径，确保路径格式正确
    base = os.path.normpath(base)
    if sub_path:
        result = os.path.join(base, sub_path)
        return os.path.normpath(result)
    return base
```

**技术要点**：
- 使用`os.getlogin()`获取当前用户名
- 通过`os.path.normpath()`规范化路径格式
- 支持通过环境变量灵活配置桌面位置

---

### 16. FTP工具 (ftp_util.py)

**功能说明**：实现FTP文件上传功能，支持批量上传和进度监控。

**核心思路**：
1. 使用Python标准库`ftplib`实现FTP连接
2. 实现目录自动创建和文件重命名
3. 支持上传进度回调

**关键代码片段**：

```python
class FTPImageUploader:
    """FTP图片批量上传工具类"""
    
    def __init__(self, host, username, password, port=21, timeout=10):
        self.host = host
        self.username = username
        self.password = password
        self.ftp = None
        self._connect()
    
    def _connect(self):
        """建立FTP连接"""
        self.ftp = ftplib.FTP()
        self.ftp.connect(self.host, self.port, self.timeout)
        self.ftp.login(self.username, self.password)
        self.ftp.set_pasv(True)  # 使用被动模式
    
    def upload_file(self, local_path, remote_path):
        """上传单个文件"""
        file_size = os.path.getsize(local_path)
        uploaded_size = 0
        
        def _progress(data):
            nonlocal uploaded_size
            uploaded_size += len(data)
            progress = (uploaded_size / file_size) * 100
            logging.info(f"上传进度: {progress:.1f}%")
        
        with open(local_path, 'rb') as file:
            self.ftp.storbinary(
                f'STOR {remote_path}', 
                file, 
                blocksize=8192, 
                callback=_progress
            )
        return True
```

**技术要点**：
- 使用被动模式（PASV）提高连接成功率
- 通过回调函数实现上传进度监控
- 实现目录自动创建，避免路径不存在错误

---

### 17. 闲管家API工具 (goofish_util.py)

**功能说明**：封装闲管家开放平台API，实现商品发布和管理功能。

**核心思路**：
1. 实现API签名算法（MD5哈希）
2. 统一处理请求和响应
3. 支持商品发布、查询等操作

**关键代码片段**：

```python
class XianYuAPI:
    """闲管家API封装类"""
    
    def _gen_sign(self, body_json: str, timestamp: int):
        """生成签名"""
        # 将请求报文进行md5
        m = hashlib.md5()
        m.update(body_json.encode("utf8"))
        body_md5 = m.hexdigest()
        
        # 拼接字符串生成签名: appKey,body_md5,timestamp,appSecret
        s = f"{self.appKey},{body_md5},{timestamp},{self.appSecret}"
        
        m = hashlib.md5()
        m.update(s.encode("utf8"))
        sign = m.hexdigest()
        return sign
    
    def _request(self, url: str, data: dict):
        """内部请求方法"""
        body = json.dumps(data, separators=(",", ":"))
        timestamp = int(time.time())
        sign = self._gen_sign(body, timestamp)
        
        # 拼接地址
        full_url = f"{self.domain}{url}?appid={self.appKey}&timestamp={timestamp}&sign={sign}"
        
        headers = {"Content-Type": "application/json"}
        conn = http.client.HTTPSConnection("api.goofish.pro")
        conn.request("POST", full_url, body, headers)
        res = conn.getresponse()
        return json.loads(res.read().decode("utf-8"))
    
    def publish_product(self, product_data):
        """发布商品"""
        return self._request("/api/open/product/publish", product_data)
```

**技术要点**：
- 实现MD5签名算法，确保API请求安全性
- 使用时间戳防止重放攻击
- 统一错误处理和响应解析

---

### 18. 图片处理工具 (image_util.py)

**功能说明**：实现图片拼接功能，将多张图片合并成长图。

**核心思路**：
1. 读取文件夹中的所有图片
2. 按修改时间排序
3. 计算总高度和最大宽度，创建新图片并拼接

**关键代码片段**：

```python
def create_long_image(folder_path, output_path):
    """将文件夹中的图片拼接成长图"""
    # 获取文件夹中的所有图片文件路径
    images = [os.path.join(folder_path, f) for f in os.listdir(folder_path) if
              f.lower().endswith(('png', 'jpg', 'jpeg'))]
    
    # 按文件的修改时间排序
    images.sort(key=lambda x: os.path.getmtime(x))
    
    # 打开所有图片并计算总高度和最大宽度
    image_objects = [Image.open(img) for img in images]
    widths, heights = zip(*(img.size for img in image_objects))
    total_height = sum(heights)
    max_width = max(widths)
    
    # 创建一张空白图片用于拼接
    long_image = Image.new('RGB', (max_width, total_height), (255, 255, 255))
    
    # 将所有图片依次粘贴到长图中
    y_offset = 0
    for img in image_objects:
        long_image.paste(img, (0, y_offset))
        y_offset += img.size[1]
    
    # 保存长图
    long_image.save(output_path)
```

**技术要点**：
- 使用`os.path.getmtime()`按修改时间排序
- 通过`zip()`函数解包图片尺寸元组
- 使用`y_offset`累加实现垂直拼接

---

### 19. OCR识别工具 (ocr.py)

**功能说明**：基于RapidOCR实现图像文字识别功能。

**核心思路**：
1. 使用RapidOCR的ONNX Runtime后端
2. 支持GPU加速（可选）
3. 使用LRU缓存优化性能

**关键代码片段**：

```python
@lru_cache(maxsize=1)
def _get_ocr_runner() -> RapidOCR:
    """初始化并缓存 RapidOCR 实例"""
    det_size_limit = max(640, int(os.getenv("OCR_DET_SIZE_LIMIT", 1280)))
    rec_batch_num = max(1, int(os.getenv("OCR_REC_BATCH_NUM", 6)))
    
    # 根据配置决定使用GPU还是CPU
    prefer_gpu = os.getenv("OCR_PREFER_GPU", "1") not in {"0", "false", "False"}
    providers = ["CUDAExecutionProvider", "CPUExecutionProvider"] if prefer_gpu else ["CPUExecutionProvider"]
    
    return RapidOCR(
        det_size_limit=det_size_limit, 
        rec_batch_num=rec_batch_num, 
        providers=providers
    )

def extract_text_from_image(file_path: str) -> str:
    """使用 OCR 识别图片中的文字"""
    runner = _get_ocr_runner()
    results, _ = runner(file_path)
    
    if not results:
        return ""
    
    # 提取文本并按行拼接
    normalized_lines = []
    for item in results:
        if isinstance(item, (list, tuple)) and len(item) >= 2:
            text = item[1]
            if isinstance(text, str) and text.strip():
                normalized_lines.append(text.strip())
    
    return "\n".join(normalized_lines).strip()
```

**技术要点**：
- 使用`@lru_cache`装饰器缓存OCR实例，避免重复初始化
- 支持GPU加速，提升识别速度
- 通过环境变量灵活配置识别参数

---

### 20. MaxKB AI工具 (maxkb_chat.py)

**功能说明**：封装MaxKB平台的AI聊天API，支持文件上传和对话功能。

**核心思路**：
1. 实现会话管理（chat_id获取）
2. 支持文件上传和Base64编码
3. 实现流式对话和普通对话

**关键代码片段**：

```python
class MaxKBChat:
    """MaxKB AI聊天工具"""
    
    def __init__(self, application_id: str, api_key: str, base_url: Optional[str] = None):
        self.application_id = application_id
        self.api_key = api_key
        self.base_url = base_url or f"https://chat.aiheadn.cn/api/application/{application_id}"
    
    def get_chat_id(self) -> Optional[str]:
        """获取 chat_id"""
        url = f"{self.base_url}/chat/open"
        headers = {"AUTHORIZATION": self.api_key}
        resp = requests.get(url, headers=headers)
        data = resp.json()
        if data.get("code") == 200:
            return data.get("data")
        return None
    
    @staticmethod
    def image_to_base64(image_path: str) -> str:
        """读取图片并转为base64 data url"""
        ext = os.path.splitext(image_path)[-1].lower().replace('.', '')
        with open(image_path, "rb") as f:
            b64 = base64.b64encode(f.read()).decode()
        return f"data:image/{ext};base64,{b64}"
    
    def send_message(self, chat_id: str, question: str, stream: bool = False):
        """发送消息"""
        url = f"{self.base_url}/chat/{chat_id}/completions"
        headers = {"Authorization": self.api_key}
        data = {"question": question, "stream": stream}
        
        if stream:
            resp = requests.post(url, headers=headers, json=data, stream=True)
            for line in resp.iter_lines():
                if line:
                    yield json.loads(line.decode())
        else:
            resp = requests.post(url, headers=headers, json=data)
            return resp.json()
```

**技术要点**：
- 实现Base64图片编码，支持图片对话
- 支持流式输出和普通输出两种模式
- 通过chat_id管理会话状态

---

### 21. PSD处理工具 (psd_processor.py)

**功能说明**：解析PSD文件，替换指定图层内容并生成最终图片。

**核心思路**：
1. 使用`psd-tools`库解析PSD文件
2. 查找并替换指定图层
3. 实现圆角矩形裁剪功能

**关键代码片段**：

```python
def replace_computer_convert(psd_file_path, layer_name, new_layer_content_path, output_directory, name):
    """替换指定图层的内容，并生成最终 JPG 文件"""
    # 加载 PSD 文件
    psd = PSDImage.open(psd_file_path)
    
    # 找到指定名称的图层
    target_layer = None
    for layer in psd:
        if layer.name == layer_name:
            target_layer = layer
            break
    
    if target_layer is None:
        raise ValueError(f"未找到名为 '{layer_name}' 的图层")
    
    # 获取该图层的大小和位置
    target_layer_width = target_layer.width
    target_layer_height = target_layer.height
    
    # 加载新图层内容并调整大小
    with Image.open(new_layer_content_path) as new_content:
        new_content = new_content.convert("RGBA")
        if new_content.size != (target_layer_width, target_layer_height):
            new_content = new_content.resize((target_layer_width, target_layer_height))
        
        # 创建合成图像，替换图层内容
        composite_image = psd.composite()
        composite_image.paste(new_content, (target_layer.left, target_layer.top), new_content)
    
    # 生成唯一的文件名并保存
    unique_filename = f"{name}_{uuid.uuid4().hex[:4]}.jpg"
    composite_output_file = os.path.join(output_directory, unique_filename)
    composite_image.convert("RGB").save(composite_output_file, "JPEG")
    
    return composite_output_file

def crop_to_rounded_rectangle(image, radius):
    """将图片裁剪为圆角矩形"""
    image = image.convert("RGBA")
    # 创建掩码
    mask = Image.new("L", image.size, 0)
    draw = ImageDraw.Draw(mask)
    # 绘制圆角矩形
    draw.rounded_rectangle((0, 0, image.width, image.height), radius=radius, fill=255)
    # 使用掩码裁剪
    result = Image.new("RGBA", image.size, (255, 255, 255, 0))
    result.paste(image, (0, 0), mask)
    return result
```

**技术要点**：
- 使用`psd.composite()`合成所有图层
- 通过图层名称查找目标图层
- 使用掩码实现圆角矩形裁剪效果

---

### 22. 腾讯云点播工具 (vod_util.py)

**功能说明**：封装腾讯云VOD（Video on Demand）服务，实现视频上传和转码功能。

**核心思路**：
1. 使用官方SDK实现视频上传
2. 支持视频转码任务流配置
3. 实现转码状态查询和媒体信息获取

**关键代码片段**：

```python
class VodUtil:
    """腾讯云点播(VOD)工具类"""
    
    def __init__(self, secret_id: str, secret_key: str, region: str = "ap-beijing"):
        self.secret_id = secret_id
        self.secret_key = secret_key
        self.region = region
        self.upload_client = VodUploadClient(secret_id, secret_key)
        self.vod_client = vod_client.VodClient(
            self._get_credential(),
            region
        )
    
    def upload_video(self, video_path: str, cover_path: str = None,
                     media_name: str = None, procedure: str = "to_m3u8") -> str:
        """上传视频文件到腾讯云VOD"""
        request = VodUploadRequest()
        request.MediaFilePath = video_path
        request.MediaType = "mp4"
        
        if cover_path:
            request.CoverFilePath = cover_path
        
        if media_name:
            request.MediaName = media_name
        
        # 设置转码参数
        setattr(request, 'Procedure', procedure)
        
        response = self.upload_client.upload(self.region, request)
        return response.FileId
    
    def get_media_info(self, file_id: str) -> dict:
        """获取媒体文件信息"""
        req = models.DescribeMediaInfosRequest()
        req.FileIds = [file_id]
        resp = self.vod_client.DescribeMediaInfos(req)
        return resp.MediaInfoSet[0] if resp.MediaInfoSet else None
    
    def query_transcode_status(self, file_id: str) -> str:
        """查询转码状态"""
        media_info = self.get_media_info(file_id)
        if media_info and media_info.TranscodeInfo:
            return media_info.TranscodeInfo.TranscodeStatus
        return "UNKNOWN"
```

**技术要点**：
- 支持视频上传时自动触发转码任务流
- 通过FileId查询转码状态和媒体信息
- 支持封面图片上传和自定义媒体名称

---