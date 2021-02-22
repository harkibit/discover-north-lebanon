import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import './Navbar.css';
import ButtonComponont from '../Button/Button';
import { useTranslation } from 'react-i18next';

const LANG_SPECS = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'ar',
    name: 'العربية',
  },
];

export default function Navbar() {
  const logo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bugarach.JPG/1200px-Bugarach.JPG';
  const [t, i18n] = useTranslation();

  const menu = (
    <Menu>
      {LANG_SPECS.map((lang) => {
        return (
          <Menu.Item
            key={lang.code}
            icon={<GlobalOutlined />}
            onClick={() => {
              i18n.changeLanguage(lang.code);
              console.log(
                'language code iss =>>' +
                  lang.code +
                  '\n language name is =>>' +
                  lang.name
              );
            }}
          >
            {lang.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div>
      <Layout id="headerStyle">
        <div className="leftRightSides">
          <img className="logo" src={logo}></img>
          {/* the img represent our logo */}
        </div>

        <Menu className="headerStyleCenter" mode="horizontal">
          <Menu.Item key="1">{t('navbar.about')}</Menu.Item>
          <Menu.Item key="2">{t('navbar.activities')}</Menu.Item>
          <Menu.Item key="3">{t('navbar.cities')}</Menu.Item>
          <Menu.Item key="4">{t('navbar.tourGuide')}</Menu.Item>
        </Menu>

        <div className="leftRightSides">
          <Dropdown.Button
            id="langButton"
            overlay={menu}
            placement="bottomCenter"
            icon={<GlobalOutlined />}
          ></Dropdown.Button>
          <ButtonComponont text={t('button.text')} type="primary" />
        </div>
      </Layout>
    </div>
  );
}
