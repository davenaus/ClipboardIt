import { BlogPost } from '../types';

const post: BlogPost = {
  "id": "10",
  "slug": "speed-ramp-premiere-pro",
  "title": "How to Speed Ramp in Premiere Pro with Time Remapping",
  "description": "Create smooth speed ramps in Premiere Pro with Time Remapping keyframes, choose the right frame interpolation, and get clean slow motion from high-frame-rate footage.",
  "author": "Austin Davenport",
  "publishDate": "2026-10-11",
  "lastModified": "2026-10-11",
  "tags": [
    "premiere-pro",
    "speed-ramp",
    "time-remapping",
    "slow-motion"
  ],
  "category": "video-editing",
  "readingTime": 6,
  "featured": false,
  "seoTitle": "How to Speed Ramp in Premiere Pro (Time Remapping) | Clipboard It",
  "seoDescription": "Speed ramp in Premiere Pro with Time Remapping: add speed keyframes, split them for smooth transitions, pick Optical Flow or Frame Blending, and conform high-frame-rate clips.",
  "image": {
    "url": "/blog/speed-ramp-premiere-pro.webp",
    "width": 1600,
    "height": 1067,
    "alt": "Purple speed curve rising and falling across a timeline"
  },
  "relatedPosts": [
    "2",
    "11"
  ],
  "directAnswer": "Right-click the clip's fx badge on the timeline and choose Time Remapping > Speed. Cmd-click (Mac) or Ctrl-click (Windows) the rubber band to add speed keyframes, then drag the section between them up to speed it up or down to slow it down. Drag the two halves of a keyframe apart to turn a sudden jump into a gradual ramp. For slow motion, footage shot at a higher frame rate looks smoothest.",
  "tutorialGroup": "editing",
  "productFit": "context",
  "ctaType": "none",
  "workflow": {
    "title": "A speed ramp in three steps",
    "steps": [
      [
        "Show speed",
        "Time Remapping on the clip"
      ],
      [
        "Add keyframes",
        "Mark where speed changes"
      ],
      [
        "Ramp it",
        "Split keyframes for smooth transitions"
      ]
    ]
  },
  content: `# How to Speed Ramp in Premiere Pro with Time Remapping

A speed ramp changes a clip's speed partway through: normal speed, a dip into slow motion at the key moment, then back up to speed. It is a staple of action edits, sports, travel videos, and product shots. Premiere's **Time Remapping** feature handles it directly on the timeline.

## Constant Speed vs Speed Ramps

Premiere has two kinds of speed change:

| Tool | What it does | Use it for |
|---|---|---|
| Speed/Duration (Cmd+R / Ctrl+R) | One speed for the whole clip | Simple slow motion or fast motion |
| Rate Stretch tool (R) | Stretches a clip to fill a gap, changing its speed | Fitting a clip to a fixed length |
| Time Remapping | Speed that changes over time with keyframes | Speed ramps |

## Step 1: Show the Speed Line

1. Make the video track taller so you have room to work: double-click an empty area of the track header, or drag the boundary between tracks in the track header.
2. Right-click the **fx** badge on the clip.
3. Choose **Time Remapping > Speed**.

A horizontal line, called the rubber band, appears across the clip. Its height represents speed, starting at 100%.

## Step 2: Add Speed Keyframes

1. Move the playhead to where the speed change should begin.
2. Cmd-click (Mac) or Ctrl-click (Windows) the rubber band at that point to add a keyframe. You can also use the **Pen** tool (P).
3. Add a second keyframe where the speed change should end.
4. Drag the section of the rubber band **between** the two keyframes down to slow it down, or up to speed it up. A tooltip shows the percentage.

Notice that slowing a section makes the clip longer on the timeline, and speeding it up makes it shorter. Leave room after the clip, or let it overlap and trim afterwards.

## Step 3: Make the Ramp Gradual

Right now the speed jumps instantly at each keyframe. To ramp smoothly:

1. Drag **one half** of a keyframe away from the other. Each keyframe splits into two markers, and the rubber band slopes between them.
2. The wider the gap, the longer the transition.
3. To curve the slope, click the area between the split halves and drag the blue handle that appears. A curved ramp feels more natural than a straight one.

To move a whole keyframe without splitting it, hold **Option** (Mac) or **Alt** (Windows) while dragging.

## Choose a Time Interpolation Method

When footage is slowed below its native frame rate, Premiere has to invent in-between frames. Select the clip and choose **Clip > Video Options > Time Interpolation**:

- **Frame Sampling:** repeats or drops frames. Choppy but crisp; good for a deliberate staccato look.
- **Frame Blending:** cross-fades between frames. Smoother, with some ghosting.
- **Optical Flow:** analyses motion to create new frames. Smoothest when it works, but can warp fast or complex movement. It also needs rendering for smooth preview.

Try Optical Flow first for slow motion, and switch to Frame Blending if you see warping around moving edges.

## Get Better Slow Motion with High-Frame-Rate Footage

The cleanest slow motion comes from footage shot at a higher frame rate than your sequence. For example, a clip shot at 60 fps in a 24 fps sequence can play at 40% speed using real frames only (24 divided by 60).

You can also make Premiere treat the whole clip as slow motion before editing:

1. Right-click the clip in the Project panel.
2. Choose **Modify > Interpret Footage**.
3. Select **Assume this frame rate** and enter your sequence frame rate, such as 24.
4. Click **OK**.

Every frame now plays back at the sequence rate, giving smooth slow motion at a fixed speed. Use Time Remapping on top of that to ramp back up to real time.

## What About Audio?

Time Remapping changes the video only, so linked audio drifts out of sync during the ramp. For most speed ramps that is fine: replace the original sound with music or sound effects. If you need the original audio, edit it separately, or use Speed/Duration for constant speed changes, which can also adjust audio.

## Tips for Better Ramps

- **Ramp on motion.** Slowing down at the peak of an action (a jump, a splash, a turn) feels intentional.
- **Cut on the beat.** Line up the return to full speed with a beat in the music.
- **Keep ramps short.** Transitions of a few frames to half a second usually feel punchier than long ones.
- **Nest complex clips.** If a clip already has effects or multiple edits, right-click and choose **Nest** before remapping so the whole result ramps together.

## Quick Reference

- **Show speed:** right-click fx badge > Time Remapping > Speed
- **Add keyframe:** Cmd-click / Ctrl-click the rubber band
- **Gradual ramp:** drag keyframe halves apart
- **Move keyframe:** Option-drag / Alt-drag
- **Interpolation:** Clip > Video Options > Time Interpolation

For more timeline speedups, see [10 Premiere Pro keyboard shortcuts for everyday editing](/blog/10-premiere-pro-keyboard-shortcuts-save-hours).
`
};

export default post;
