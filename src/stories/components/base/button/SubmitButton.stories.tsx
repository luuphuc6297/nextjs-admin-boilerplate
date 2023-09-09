import { SubmitButton as Component } from '@/components/base/button/SubmitButton'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Component> = {
    title: 'Components/Base/SubmitButton',
    component: Component,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Component>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SubmitButtonPrimary: Story = {
    args: {
        show: true,
        children: 'Submit',
        sx: {
            width: 384,
            height: 44,
            boxShadow: 'none',
        },
    },
} satisfies Story

export const SubmitButtonPrimaryDisabled: Story = {
    args: {
        ...SubmitButtonPrimary.args,
        disabled: true,
    },
} satisfies Story

export const SubmitButtonPrimaryLoading: Story = {
    args: {
        ...SubmitButtonPrimary.args,
        disabled: true,
        loading: true,
    },
} satisfies Story
