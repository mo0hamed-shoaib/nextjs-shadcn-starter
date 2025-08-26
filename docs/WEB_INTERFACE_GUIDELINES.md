# Web Interface Guidelines

This document outlines a non-exhaustive list of details that make a good (web) interface. It is a living document, periodically updated based on learnings. Some of these may be subjective, but most apply to all websites.

The WAI-ARIA spec is deliberately not duplicated in this document. However, some accessibility guidelines may be pointed out. Contributions are welcome. Edit this file and submit a pull request.

## Interactivity
- Clicking the input label should focus the input field
- Inputs should be wrapped with a `<form>` to submit by pressing Enter
- Inputs should have an appropriate `type` like `password`, `email`, etc
- Inputs should disable `spellcheck` and `autocomplete` attributes most of the time
- Inputs should leverage HTML form validation by using the `required` attribute when appropriate
- Input prefix and suffix decorations, such as icons, should be absolutely positioned on top of the text input with padding, not next to it, and trigger focus on the input
- Toggles should immediately take effect, not require confirmation
- Buttons should be disabled after submission to avoid duplicate network requests
- Interactive elements should disable `user-select` for inner content
- Decorative elements (glows, gradients) should disable `pointer-events` to not hijack events
- Interactive elements in a vertical or horizontal list should have no dead areas between each element, instead, increase their `padding`

## Typography
- Fonts should have `-webkit-font-smoothing: antialiased` applied for better legibility
- Fonts should have `text-rendering: optimizeLegibility` applied for better legibility
- Fonts should be subset based on the content, alphabet or relevant language(s)
- Font weight should not change on hover or selected state to prevent layout shift
- Font weights below 400 should not be used
- Medium sized headings generally look best with a font weight between 500-600
- Adjust values fluidly by using CSS `clamp()`, e.g. `clamp(48px, 5vw, 72px)` for the `font-size` of a heading
- Where available, tabular figures should be applied with `font-variant-numeric: tabular-nums`, particularly in tables or when layout shifts are undesirable, like in timers
- Prevent text resizing unexpectedly in landscape mode on iOS with `-webkit-text-size-adjust: 100%`

## Motion
- Switching themes should not trigger transitions and animations on elements
- Animation duration should not be more than 200 ms for interactions to feel immediate
- Animation values should be proportional to the trigger size:
  - Don’t animate dialog scale in from 0 → 1; fade opacity and scale from ~0.8
  - Don’t scale buttons on press from 1 → 0.8; scale from ~0.96, ~0.9, or so
- Actions that are frequent and low in novelty should avoid extraneous animations:
  - Opening a right-click menu
  - Deleting or adding items from a list
  - Hovering trivial buttons
- Looping animations should pause when not visible on the screen to offload CPU and GPU usage
- Use `scroll-behavior: smooth` for navigating to in-page anchors, with an appropriate offset

## Touch
- Hover states should not be visible on touch press—use `@media (hover: hover)`
- Font size for inputs should not be smaller than 16px to prevent iOS zooming on focus
- Inputs should not autofocus on touch devices as it opens the keyboard and may cover the screen
- Apply `muted` and `playsinline` to `<video />` tags to autoplay on iOS
- Disable `touch-action` for custom components that implement pan and zoom gestures to prevent interference
- Disable the default iOS tap highlight with `-webkit-tap-highlight-color: rgba(0,0,0,0)`—but always replace it with an appropriate alternative

## Optimizations
- Large `blur()` values for `filter` and `backdrop-filter` may be slow
- Scaling and blurring filled rectangles will cause banding—use radial gradients instead
- Sparingly enable GPU rendering with `transform: translateZ(0)` for unperformant animations
- Toggle `will-change` on unperformant scroll animations for the duration of the animation
- Auto-playing too many videos on iOS can degrade performance—pause or unmount off-screen videos
- Bypass React’s render lifecycle with refs for real-time values to directly commit to the DOM
- Detect and adapt to the hardware and network capabilities of the user's device

## Accessibility
- Disabled buttons should not have tooltips—they aren’t accessible via keyboard navigation
- Use box-shadow for focus rings, not outline, which may not respect border radius
- Focusable elements in a sequential list should be navigable with ↑ and ↓
- Focusable elements in a sequential list should be deletable with ⌘ Backspace
- Dropdown menus should trigger on mousedown (not click) to open immediately
- Use an SVG favicon styled according to the system theme (prefers-color-scheme)
- Icon-only interactive elements should define an explicit `aria-label`
- Tooltips triggered by hover should not contain interactive content
- Images should always be rendered with `<img>` for screen readers and ease of copying
- Illustrations built with HTML should have an explicit `aria-label` (not rely on raw DOM)
- Gradient text should unset the gradient on `::selection` state
- When using nested menus, use a “prediction cone” to prevent accidental closure during pointer movement

## Design
- Optimistically update data locally and roll back on server error with feedback
- Authentication redirects should happen on the server before the client loads to avoid janky URL changes
- Style the document selection state with `::selection`
- Display feedback relative to its trigger:
  - Show a temporary inline checkmark on a successful copy, not a notification
  - Highlight the relevant input(s) on form error(s)
- Empty states should prompt creation of a new item, with optional templates

## Footnotes
1. Switching between dark mode or light mode may trigger transitions on elements meant for explicit interactions like hover. We can disable transitions temporarily—but tools like Next.js with `next-themes` can help prevent transitions out of the box.
2. Some interactions feel better with minimal motion—for example, macOS’s native right-click menu only animates out, not in.
3. Most touch devices flash hover states briefly unless explicitly scoped with `@media (hover: hover)`.
4. Use `will-change` sparingly—it should be a last resort for performance tweaks.
5. It can sometimes help to manipulate the DOM directly (e.g., using refs to update UI on wheel events rather than re-rendering via React).
6. Disabled buttons aren’t in the tab order, so tooltips for them won’t be announced for keyboard users.
7. As of Safari 16.4, `outline` respects border-radius, but older versions may not—so prefer `box-shadow` for consistent focus styling.
