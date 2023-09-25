import React from 'react'
import { Card, Text, Metric, Flex, BadgeDelta } from "@tremor/react";
const Cost = () => {
return (
    <Card
      className="w-xs"
      decoration="top"
      decorationColor="indigo"
    >
        <Flex justifyContent='between' alignItems='center'>
            <BadgeDelta deltaType='moderateDecrease'>-7.5%</BadgeDelta>
          <Text>Cost</Text>   
        </Flex>
     
      <Metric>$ 14,043</Metric>
    </Card>
  );
  
}

export default Cost;