import React from 'react'

import { Colorway } from '../../config'

export const chromaticDemo = <T extends {}>(
  Comp: React.ElementType,
  props: React.PropsWithoutRef<T>,
) => (
  <div>
    {Object.values(Colorway).map((color) => (
      <Comp {...props} color={color} key={`colorway-${color}`}>
        {color}
      </Comp>
    ))}
  </div>
)
