import React from 'react'
import { Card, Text, Metric, Flex, BadgeDelta } from '@tremor/react';

const Sales = () => {
  return (
    <Card
      className="w-xs"
      decoration="top"
      decorationColor="indigo"
    >
        <Flex justifyContent='between' alignItems='center'>
            <BadgeDelta deltaType='moderateIncrease'>+12.5%</BadgeDelta>
          <Text>Sales</Text>   
        </Flex>
     
      <Metric>$ 34,743</Metric>
    </Card>
  );
}

export default Sales;