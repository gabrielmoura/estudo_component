import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {BlButton} from '../src/component/blButton'
export default {
title:'Componentes/BlButton',
component:BlButton
} as ComponentMeta<typeof BlButton>

const Template: ComponentStory<typeof BlButton>=()=><BlButton />
export const Primario = Template.bind({})