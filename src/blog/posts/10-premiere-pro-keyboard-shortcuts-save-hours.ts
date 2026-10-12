import { BlogPost } from '../types';

const post: BlogPost = {
  "id": "2",
  "slug": "10-premiere-pro-keyboard-shortcuts-save-hours",
  "title": "10 Premiere Pro Keyboard Shortcuts for Everyday Editing",
  "description": "A practical reference for playback, marking, trimming, and common editing shortcuts in Premiere Pro.",
  "author": "Austin Davenport",
  "publishDate": "2025-07-20",
  "lastModified": "2026-10-11",
  "tags": [
    "premiere-pro",
    "keyboard-shortcuts",
    "productivity",
    "editing-tips"
  ],
  "category": "premiere-pro",
  "readingTime": 3,
  "featured": true,
  "seoTitle": "10 Essential Premiere Pro Keyboard Shortcuts | Clipboard It",
  "seoDescription": "Learn Premiere Pro shortcuts for playback, ripple trimming, transitions, and timeline edits, with Windows and Mac notes.",
  "image": {
    "url": "/blog/10-premiere-pro-keyboard-shortcuts-save-hours.webp",
    "width": 1600,
    "height": 1067,
    "alt": "Premiere Pro keyboard shortcut layout"
  },
  "relatedPosts": [
    "1",
    "3"
  ],
  "directAnswer": "Premiere Pro shortcuts depend on your operating system, active panel, and keyboard preset. Start with playback, In and Out points, and the edit commands you use most often; check each binding in Keyboard Shortcuts before relying on it.",
  "tutorialGroup": "editing",
  "productFit": "context",
  "ctaType": "none",
  "workflow": {
    "title": "A shortcut workflow",
    "steps": [
      [
        "Navigate",
        "Review with J, K, and L"
      ],
      [
        "Mark",
        "Set In and Out points"
      ],
      [
        "Edit",
        "Choose the right trim or insert"
      ]
    ]
  },
  content: `# 10 Premiere Pro Keyboard Shortcuts for Everyday Editing

These ten shortcuts cover the actions you repeat most: reviewing footage, marking a selection, cutting, removing clips, and undoing a change.

![Premiere Pro Keyboard](/blog/10-premiere-pro-keyboard-shortcuts-save-hours.webp)

## Check Your Keyboard Preset

The bindings below are from Adobe's default preset. Custom presets, keyboard layouts, panel focus, and text-entry fields can change what a key does. Confirm each command in your **Keyboard Shortcuts** dialog, and keep [Adobe's default shortcut reference](https://helpx.adobe.com/premiere/desktop/get-started/keyboard-shortcuts/default-keyboard-shortcuts.html) nearby.

## The 10 Shortcuts

| Command | Windows | macOS |
|---|---|---|
| Reverse playback / Pause / Forward playback | J / K / L | J / K / L |
| Play/Pause | Spacebar | Spacebar |
| Set In Point / Set Out Point | I / O | I / O |
| Ripple Trim Previous / Next Edit to Playhead | Q / W | Q / W |
| Add Edit | Ctrl + K | Cmd + K |
| Ripple Delete | Shift + Delete | Shift + Forward Delete |
| Lift | ; (semicolon) | ; (semicolon) |
| Default video transition | Ctrl + D | Cmd + D |
| Default audio transition | Ctrl + Shift + D | Cmd + Shift + D |
| Undo / Redo | Ctrl + Z / Ctrl + Shift + Z | Cmd + Z / Cmd + Shift + Z |

## Playback and Marking

Use J, K, and L to review footage. Press J or L again to play faster in that direction; press K to stop. Spacebar toggles playback.

Press I and O while playing to mark the start and end of a selection. Use marked ranges to build sequences and subclips, and to set what Lift removes.

## Trimming and Cutting

Park the playhead where you want the cut and press Q to trim the previous edit to it, or W to trim the next edit. Use the arrow keys to step frame by frame before trimming. You don't need to switch tools.

**Add Edit** (Ctrl/Cmd + K) splits the clip at the playhead.

Q, W, and Add Edit change sequence timing. Check track targeting and sync locks first.

## Ripple Delete vs. Lift

All three remove material. The difference is what happens to the space.

- Ripple Delete removes the selected clip and closes the gap.
- Plain Delete/Clear removes the selected clip and leaves the gap.
- Lift (;) removes the marked In/Out range from targeted tracks and leaves a gap, so the sequence length and downstream sync stay the same.

## Transitions and Undo

Ctrl/Cmd + D applies the default video transition, usually Cross Dissolve. Ctrl/Cmd + Shift + D applies the default audio crossfade. Listen before adding one: not every audio cut needs a crossfade.

Undo and redo make it safe to try an edit. The History panel shows the available undo steps. Save a project version before major changes.

## Practice Plan

Learn the shortcuts in groups and use them in real projects:

1. Playback and marking: J, K, L, Spacebar, I, O.
2. Trimming and cutting: Q, W, Add Edit.
3. Removing and transitions: Ripple Delete, Lift, default transitions.

To judge whether a shortcut helps, time a repeatable task before and after you learn it.
`
};

export default post;
