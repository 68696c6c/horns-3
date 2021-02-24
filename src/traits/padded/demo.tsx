import React from 'react'

import { Size } from '../../config'

export const paddedDemo = <T extends {}>(
  Comp: React.ElementType,
  props: React.PropsWithoutRef<T>,
) => (
  <div>
    {Object.values(Size).map((size) => (
      <Comp {...props} padding={size} key={`padding-${size}`}>
        {size}
      </Comp>
    ))}
  </div>
)
