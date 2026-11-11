import type {ComponentProps} from 'react';
import {cva,type VariantProps} from 'class-variance-authority';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
export const buttonVariants=cva('button',{variants:{variant:{default:'button-primary',outline:'button-outline',ghost:'button-ghost',danger:'button-danger'},size:{default:'',sm:'button-small',icon:'button-icon'}},defaultVariants:{variant:'default',size:'default'}});
export function Button({className,variant,size,...props}:ComponentProps<'button'>&VariantProps<typeof buttonVariants>){return <button data-slot="button" className={twMerge(clsx(buttonVariants({variant,size}),className))} {...props}/>;}
