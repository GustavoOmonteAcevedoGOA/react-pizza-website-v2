import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SiderBtnWrap, SidebarRoute } from './SidebarElements'


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                 <SidebarLink to="/">Pizzas</SidebarLink>
                 <SidebarLink to="/">Desserts</SidebarLink>
                 <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SiderBtnWrap>
                <SidebarRoute to ="/">Order Now</SidebarRoute>
            </SiderBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
