'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import React from 'react'

function Admin() {
  return (
    <section className="admin min-h-screen min-w-full flex items-center justify-center">
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>
                    Edit Website
                </CardTitle>
                <CardDescription>
                    Customize your content
                </CardDescription>
            </CardHeader>
            <CardContent>
            <Label> שם חברה</Label>
            <Input type='text' max={10} placeholder='עד 10 תווים'></Input>
            </CardContent>
            <CardDescription>
            </CardDescription>
            <CardFooter>
                <Button>
                    שלח
                </Button>
            </CardFooter>
        </Card>
    </section>
  )
}

export default Admin