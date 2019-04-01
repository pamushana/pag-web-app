import React from 'react';
import Logo from 'images/logo.png';
import Logoo from 'images/logoo.png';
import GreyLogo from 'images/greyLogo.png';
import Security from 'images/security.png';
import Transport from 'images/transport.png';
import Agriculture from 'images/agriculture.png';

import Vision from 'images/vision.svg';
import Mission from 'images/mission.svg';
import Values from 'images/value.svg';
import History from 'images/history.svg';
import Divisions from 'images/divisions.svg';
import Community from 'images/community.svg';

import Boss from 'images/boss.jpg';
import Madam from 'images/madam.jpg';
import Pablo from 'images/pablo.png';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: Logo,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: 'Home', href: '' } },
      { name: 'item1', a: { children: 'About', href: '' } },
      { name: 'item2', a: { children: 'Divisions', href: '' } },
      { name: 'item3', a: { children: 'Management', href: '' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: Logoo,
  },
  content: {
    className: 'banner0-content',
    children: 'infinite Possibilities',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Divisions' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: Transport,
          },
          title: {
            className: 'content0-title',
            children: 'Pamushana Africa Transport',
          },
          content: {
            children: 'Public Transport, Private Hire, Freight Movement',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: Security,
          },
          title: {
            className: 'content0-title',
            children: 'CrimeStoppers',
          },
          content: { children: 'Elite Security Force, Security Equipment, High Value Asset Movement' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: Agriculture,
          },
          title: {
            className: 'content0-title',
            children: 'Pamushana Africa Agriculture',
          },
          content: { children: 'Organic farm produce delivered to your door' },
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Products & Services', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '在这里用一段话介绍服务的案例情况',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'About Us',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: 'Philosophy and Principles',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: Vision,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: 'Vision',
          },
          content: {
            className: 'content3-content',
            children: `Pamushana Africa Group (PAG) is
            committed to improving Zimbabweans'
            way of life and beyond the borders
            through provision of mutually lifelong
            beneficial relationships,
            growing the business through
            seeking favour and guidance from God`,
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: Mission,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Mission' },
          content: {
            className: 'content3-content',
            children: `To maintain, grow and lead
            Pamushana Africa Group (PAG) as
            a world class services provider in
            Southern Africa through safely
            providing a touch of excellence.`,
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: Values,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Values' },
          content: {
            className: 'content3-content',
            children: `Pamushana Africa Group (PAG) has
            the following values having foremost importance:
              Integrity.
              Accountability.
              Diligence.
              Perseverance.
              Discipline.`,
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: History,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'History' },
          content: {
            className: 'content3-content',
            children: `Pamushana Africa Group (PAG)
            was incorporated on 13 April 2004 as
            business with diversified interests.
            The Group is a producer, marketer and
            distributor of fresh farm produce as well
            as a passenger and cargo transporter.`,
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: Divisions,
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Divisions' },
          content: {
            className: 'content3-content',
            children: `Pamushana Africa Group (PAG)
              is a diversified holding
              company with major areas of investment
              interests in: Transport, Farming, Security.
              The companies in the group are:
              Pamushana Africa Transport,
              Pamushana Africa Agriculture,
              Pamushana Africa Security t/a
              Crime Stoppers Security`,
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: Community,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: 'Corporate Responsibility',
          },
          content: {
            className: 'content3-content',
            children: `Pamushana Africa Group (PAG)
               has a strong legacy of ongoing
              commitment to practicing the principles of
              Corporate Responsibility. Over the years,
              Pamushana Africa has developed many programs which
              have spearheaded transformation in the lives of
              thousands of individuals and communities.`,
          },
        },
      },
    ],
  },
};
export const Content80DataSource = {
  wrapper: { className: 'home-page-wrapper content8-wrapper' },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: 'Management', className: 'title-h1' },
    ],
  },
  block: {
    className: 'content-wrapper',
    children: [
      {
        name: 'block0',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: Boss,
          },
          title: {
            className: 'content8-title',
            children: 'Hardlife .T. Chipika',
          },
          content: {
            className: 'content8-content',
            children: 'Group Chief Executive Officer',
          },
        },
      },
      {
        name: 'block1',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: Madam,
          },
          title: {
            className: 'content8-title',
            children: 'Clarisa Chipika',
          },
          content: {
            className: 'content8-content',
            children: 'HR and Business Development Manager',
          },
        },
      },
      {
        name: 'block2',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children: Pablo,
          },
          title: {
            className: 'content8-title',
            children: 'Pablo .T. Chimusoro',
          },
          content: {
            className: 'content8-content',
            children: 'Chief Marketing Officer',
          },
        },
      },
      {
        name: 'block3',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://scc.rhul.ac.uk/files/2018/06/placeholder.png',
          },
          title: { className: 'content8-title', children: '---' },
          content: {
            className: 'content8-content',
            children: 'General Manager, Transport Division',
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: GreyLogo,
        },
        content: {
          className: 'slogan',
          children: 'A group of companies.',
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Quick Links' },
        content: {
          children: (
            <span>
              <p>
                <a href="www.transport.pamushanaafrica.com">
                  Pamushana Africa Transport
                </a>
              </p>
              <p>
                <a href="www.agriculture.pamushanaafrica.com">
                  Pamushana Africa Agriculture
                </a>
              </p>
              <p>
                <a href="www.security.pamushanaafrica.com">CrimeStoppers</a>
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'About' },
        content: {
          children: (
            <span>
              <p>
                <a href="#">Products & Services</a>
              </p>
              <p>
                <a href="#">Management</a>
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Contact Us' },
        content: {
          children: (
            <span>
              <p>
                <a href="tel:+263773205674">Call: +263 7732 0567 4</a>
              </p>
              <p>
                <a href="mailto:wecare@pamushanaafrica.com">
                  Email: wecare@pamushanaafrica.com
                </a>
              </p>
              <p>
                <a
                  href="https://maps.google.com/?q=1813 14th Road, Harare, Zimbabwe"
                  target="_blank"
                >
                  Visit: Pamushana House Number 1813 14th Road, Harare, Zimbabwe
                </a>
              </p>
            </span>
          ),
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2019 by <a href="#">Ezyy, Inc</a> All Rights
        Reserved
      </span>
    ),
  },
};
