import { BlogPost } from '../types';

const post: BlogPost = {
  "id": "7",
  "slug": "ken-burns-effect-premiere-pro",
  "title": "How to Add a Pan and Zoom (Ken Burns) Effect in Premiere Pro",
  "description": "Animate still photos with slow pans and zooms using Scale and Position keyframes, smooth the motion with easing, and reuse it across a whole slideshow.",
  "author": "Austin Davenport",
  "publishDate": "2026-10-11",
  "lastModified": "2026-10-11",
  "tags": [
    "premiere-pro",
    "still-images",
    "keyframes",
    "motion"
  ],
  "category": "video-editing",
  "readingTime": 6,
  "featured": false,
  "seoTitle": "Ken Burns Pan & Zoom Effect in Premiere Pro | Clipboard It",
  "seoDescription": "Create a Ken Burns pan and zoom on photos in Premiere Pro with Scale and Position keyframes, add easing, avoid soft images, and copy the motion to other clips.",
  "image": {
    "url": "/blog/ken-burns-effect-premiere-pro.webp",
    "width": 1600,
    "height": 1067,
    "alt": "Purple photo with a zoom frame and motion path"
  },
  "relatedPosts": [
    "6",
    "2"
  ],
  "directAnswer": "Select the photo on the timeline and open Effect Controls. At the start of the clip, click the stopwatch next to Scale and Position to create keyframes. Move to the end of the clip and change Scale (for example from 100 to 115) and Position. Premiere animates between the two keyframes. Right-click the keyframes and choose Ease In or Ease Out for smoother motion, and use Set to Frame Size rather than Scale to Frame Size so the zoom stays sharp.",
  "tutorialGroup": "images",
  "productFit": "context",
  "ctaType": "none",
  "workflow": {
    "title": "A pan and zoom in three moves",
    "steps": [
      [
        "Start keyframes",
        "Scale and Position at the first frame"
      ],
      [
        "End keyframes",
        "Change Scale and Position at the last frame"
      ],
      [
        "Ease and reuse",
        "Smooth motion, paste to other clips"
      ]
    ]
  },
  content: `# How to Add a Pan and Zoom (Ken Burns) Effect in Premiere Pro

A slow push in or drift across a photo makes still images feel like footage. Documentaries, slideshows, and YouTube explainers use it constantly. In Premiere Pro, the effect is two keyframes on the clip's built-in Motion properties; no plugins are required.

## Before You Start: Keep the Image Sharp

Zooming enlarges the image, so it needs pixels to spare.

1. Use images larger than your sequence frame when you can. For a 1080p sequence, a photo around 3000 to 4000 pixels wide leaves plenty of room.
2. Fit the image with **Set to Frame Size**, not **Scale to Frame Size**. Set to Frame Size keeps the original resolution; Scale to Frame Size reduces the image to the sequence size, and zooming into that copy looks soft. [How to fit an image to the frame](/blog/fit-image-to-frame-premiere-pro) explains the difference.

## Create the Pan and Zoom

1. Place the photo on the timeline and select it.
2. Open **Effect Controls** (Window > Effect Controls) and expand **Motion**.
3. Move the playhead to the **first frame** of the clip.
4. Click the **stopwatch** next to **Scale**, then the stopwatch next to **Position**. Each property now has a keyframe at the start.
5. Move the playhead to the **last frame** of the clip. Pressing the Down Arrow key jumps to the next edit point; step back one frame with the Left Arrow key so you stay on the clip.
6. Change **Scale**, for example from 100 to 115. Premiere adds a keyframe automatically because the stopwatch is on.
7. Change **Position** to drift toward the subject. Dragging the values left or right is quicker than typing.
8. Play the clip back to check the motion.

To position the image visually, click the word **Motion** in Effect Controls. Handles appear around the image in the Program Monitor, and you can drag the image directly.

## Choose a Direction That Supports the Story

- **Push in (scale up):** draws attention to a face, detail, or line of text.
- **Pull out (scale down):** reveals context, such as a person in a wide landscape.
- **Pan (position only):** follows a line in the image, such as a road, a group of people, or a timeline.

Keep movement subtle. A change of 10 to 20 percent in Scale over five seconds feels deliberate; large, fast moves look like a mistake. Make sure the image covers the frame at both keyframes, or empty edges will slide into view.

## Smooth the Motion with Easing

By default, keyframes are linear: the motion starts and stops abruptly. To ease it:

1. In Effect Controls, select the keyframes for Scale and Position. Drag a box around them to select several.
2. Right-click a selected keyframe.
3. Choose **Temporal Interpolation > Ease Out** for the first keyframes and **Ease In** for the last ones. **Bezier** gives similar results with adjustable handles.

For a constant, steady drift through a slideshow, linear keyframes can actually look better, because motion does not appear to stop at every cut. Try both.

## Reuse the Motion on Other Photos

Once one clip looks right, copy its animation:

1. Select the finished clip and copy it (Cmd+C on Mac, Ctrl+C on Windows).
2. Select the other photo clips.
3. Choose **Edit > Paste Attributes**.
4. Check **Motion**. Leave **Scale Attribute Times** checked so the keyframes stretch to fit each clip's length.
5. Click **OK**.

Then adjust Position on each image so the move suits its subject. Pasted Scale values assume similar image sizes, so check any photo whose dimensions differ from the original.

## Optional: Add Motion Blur

Fast pans can stutter on screen. The **Transform** effect (Effects > Video Effects > Distort > Transform) has its own Scale and Position controls plus a **Shutter Angle** setting. Uncheck **Use Composition's Shutter Angle** and raise Shutter Angle to add motion blur. Animate the Transform effect's properties instead of Motion when you want that blur.

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Image looks soft while zooming | Scale to Frame Size was used, or the image is small | Use Set to Frame Size and a larger image |
| Black edges appear | Image does not cover the frame at one keyframe | Raise Scale at that keyframe |
| Motion jumps at the start | Playhead was not on the first frame when keyframes were created | Drag the first keyframes to the clip start |
| Pasted motion looks wrong | Images have different sizes, or Scale Attribute Times was off | Paste again with Scale Attribute Times on, then adjust each clip |

## Gathering the Photos

Pan and zoom works best when you have a bin full of high-resolution images ready to go. If you collect reference photos from a browser as you edit, [pasting images straight into a Premiere bin](/blog/why-you-cant-copy-paste-images-premiere-pro) saves the save-rename-import routine for each one.
`
};

export default post;
