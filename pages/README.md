- Components have default parameters and are overriten with Style props.
- Chakra UI has its own implemented design system and every design system has designed tokens, which are colors, spacing units, fonts, sizes, etc.
- style props can access design tokens
- Under the hood, these style props are compiled to CSS properties.
- These style props can be checked out on the Chakra UI website: https://chakra-ui.com/docs/styled-system/theming/theme or
  ./node_modules/@chakra-ui/styled-system/src/config/space.ts
- design tokens have long and short forms: width (w), height (h), padding (p), margin (m), etc
- spaces integers are 4x in pixels: 10 == 40px
- background and backgroundColor are interchangeable
