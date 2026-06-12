import os
import re

directory = r'f:\Web dev Project work\Softcr8ors projects\Agency_website\src'

count = 0

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') and file != 'AnimatedHeading.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            if re.search(r'<h[1-6](?:\s|>|/|$)', content):
                # Add import if needed
                if 'AnimatedHeading' not in content:
                    imports = re.findall(r'^import .*;?$', content, flags=re.MULTILINE)
                    if imports:
                        last_import = imports[-1]
                        import_str = 'import AnimatedHeading from "@/components/ui/AnimatedHeading";\n'
                        # Replace only the first occurrence of last_import to avoid messing up duplicate imports if any
                        content = content.replace(last_import, last_import + '\n' + import_str, 1)
                    else:
                        content = 'import AnimatedHeading from "@/components/ui/AnimatedHeading";\n' + content
                
                # Replace tags
                for i in range(1, 7):
                    tag = f'h{i}'
                    # <hN ...> or <hN>
                    content = re.sub(rf'<{tag}(\s[^>]*?)?>', rf'<AnimatedHeading as="{tag}"\1>', content)
                    # </hN>
                    content = re.sub(rf'</{tag}>', r'</AnimatedHeading>', content)
                    
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1
                print(f"Updated {file}")

print(f"Total files updated: {count}")
