import rembg
from PIL import Image
import io
import os

def process_lady():
    input_path = "f:/Web dev Project work/Softcr8ors projects/Agency_website/i_need_female_iamge_from_202606101633.jpeg"
    output_path = "f:/Web dev Project work/Softcr8ors projects/Agency_website/public/images/lady-pointing.png"
    
    img = Image.open(input_path)
    width, height = img.size
    
    # The lady is roughly in the middle. We'll crop her region to avoid rembg picking up the cards.
    # In a 2752x1536 image, let's crop x from 650 to 1700, y from 0 to 1536.
    cropped = img.crop((650, 0, 1700, height))
    
    # Save cropped to a buffer
    buf = io.BytesIO()
    cropped.save(buf, format='PNG')
    input_data = buf.getvalue()
    
    # Remove background
    output_data = rembg.remove(input_data)
    
    # Open the result to trim empty space
    res_img = Image.open(io.BytesIO(output_data))
    bbox = res_img.getbbox()
    if bbox:
        res_img = res_img.crop(bbox)
        
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    res_img.save(output_path, "PNG")
    print(f"Successfully processed and saved lady image to {output_path}")

if __name__ == "__main__":
    process_lady()
