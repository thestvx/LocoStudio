from PIL import Image, ImageChops
a=Image.open("home.png").convert("RGB")
b=Image.open("framer.png").convert("RGB")
w,h=min(a.width,b.width), min(a.height,b.height)
a=a.resize((w,h)); b=b.resize((w,h))
diff=ImageChops.difference(a,b)
# find bounding box of significant diff
mask=diff.point(lambda p: 255 if p>40 else 0).convert("L")
bbox=mask.getbbox()
print("bbox", bbox)
# grid of diff sums
cols=8; rows=12
cw=w//cols; ch=h//rows
for r in range(rows):
    for c in range(cols):
        box=(c*cw,r*ch,(c+1)*cw,(r+1)*ch)
        region=diff.crop(box)
        px=list(region.getdata())
        s=sum(r+g+b for r,g,b in px)
        if s/(cw*ch*3)>30:
            print(f"row{r} col{c} avgdiff={s/(cw*ch*3):.1f}")
PY