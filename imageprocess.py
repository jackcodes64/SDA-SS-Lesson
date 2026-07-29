from PIL import Image
import numpy as np

img = Image.open("./assets/images/Pasted image.png").convert("RGBA")
arr = np.array(img)

rgb = arr[:, :, :3].astype(np.float32)

# Perceived brightness
luma = (
    0.299 * rgb[:, :, 0] +
    0.587 * rgb[:, :, 1] +
    0.114 * rgb[:, :, 2]
)

# Thresholds
white_start = 225   # start fading
white_end   = 255   # fully transparent

alpha = 255 * (white_end - luma) / (white_end - white_start)
#alpha = np.clip(alpha, 0, 255).astype(np.uint8)
alpha = np.power((255 - luma) / 255.0, 0.6) * 255
arr[:, :, 3] = alpha

Image.fromarray(arr).save("./assets/images/lesson9.png")