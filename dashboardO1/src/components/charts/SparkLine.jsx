import React from 'react'
import { SparklineComponent } from '@syncfusion/ej2-react-charts'
import { Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

function SparkLine({type, id, color, currentColor, height, width, data}) {
  return (
    <SparklineComponent
      id={id}
      width={width}
      height={height}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color: currentColor, width:2}}
      dataSource={data}
      xName='x'
      yName='y'
      type={type}
      tooltipSettings={{
        visible: true,
      }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default SparkLine