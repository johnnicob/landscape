// @vitest-environment jsdom
import {afterEach,it,expect} from 'vitest';
import {render,screen,fireEvent,cleanup} from '@testing-library/react';
import {SiteTabs} from '@/features/editor/renderer/Interactive';
import {RichText} from '@/features/editor/renderer/RichText';
afterEach(cleanup);
it('switches accessible tab panels',()=>{render(<SiteTabs items={[{id:'a',title:'Ceremony',body:'In the garden'},{id:'b',title:'Reception',body:'Under the stars'}]}/>);fireEvent.click(screen.getByRole('tab',{name:'Reception'}));expect(screen.getByRole('tabpanel').textContent).toContain('Under the stars');});
it('escapes text instead of rendering arbitrary HTML',()=>{const {container}=render(<RichText value={{type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'<script>unsafe()</script>',marks:[{type:'bold'}]}]}]}}/>);expect(container.querySelector('script')).toBeNull();expect(container.textContent).toContain('<script>unsafe()</script>');});
