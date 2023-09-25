import React from 'react'
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const data = [
  {
    name: "Viola Amherd",
    Role: "CFO",
    departement:
      "Finance",
    status: "active",
  },
  {
    name: "Simonetta Sommaruga",
    Role: "Director",
    departement:
      "IT",
    status: "active",
  },
  {
    name: "Alain Berset",
    Role: "Vice President",
    departement: "Law",
    status: "active",
  },
  {
    name: "Ignazio Cassis",
    Role: "Manager",
    departement: "Human Resources",
    status: "active",
  },
  {
    name: "Ueli Maurer",
    Role: "Intern",
    departement: "IT",
    status: "active",
  },
  {
    name: "Guy Parmelin",
    Role: "Staff",
    departement: "Marketing",
    status: "active",
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Designer",
    departement: "Production",
    status: "active",
  },
];
const TableComponent = () => {
  return (
    <Card className='mt-4'>
      <Title>List of Employees</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.departement}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StatusOnlineIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default TableComponent