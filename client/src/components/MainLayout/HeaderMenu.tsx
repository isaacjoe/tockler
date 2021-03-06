import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import { Brand, Img } from './HeaderMenu.styles';
import styled from 'styled-components';

const GrayMenu = styled(Menu)``;

const tocklerIcon = require('../../assets/icons/tockler_icon.png');

export const HeaderMenu = ({ location }: any) => (
    <GrayMenu selectedKeys={[location.pathname]} mode="horizontal">
        <Menu.Item key="/app/timeline2">
            <Link to="/app/timeline">
                <Brand>
                    <Img src={tocklerIcon} width="28" height="28" />
                    <span>Tockler</span>
                </Brand>
            </Link>
        </Menu.Item>
        <Menu.Item key="/app/timeline">
            <Link to="/app/timeline">
                <Icon type="bars" />Timeline
            </Link>
        </Menu.Item>
        <Menu.Item key="/app/summary">
            <Link to="/app/summary">
                <Icon type="area-chart" />Summary
            </Link>
        </Menu.Item>
        <Menu.Item key="/app/settings">
            <Link to="/app/settings">
                <Icon type="setting" />Settings
            </Link>
        </Menu.Item>
    </GrayMenu>
);
