import React from 'react'
import { Card, Text, Metric, Flex, BadgeDelta } from "@tremor/react";
const Benefits = () => {
return (
  <Card className="w-xs" decoration="top" decorationColor="indigo">
    <Flex justifyContent="between" alignItems="center">
      <BadgeDelta deltaType="moderateIncrease">+10.5%</BadgeDelta>
      <Text>Benefits</Text>
    </Flex>

    <Metric>$ 24,743</Metric>
  </Card>
);
}

export default Benefits