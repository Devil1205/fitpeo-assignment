import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Product',
    path: '',
    icon: icon('ic_cart'),
  },
  {
    title: 'Customers',
    path: '',
    icon: icon('ic_user'),
  },
  {
    title: 'Income',
    path: '',
    icon: icon('ic_blog'),
  },
  {
    title: 'Promote',
    path: '',
    icon: icon('ic_lock'),
  },
  {
    title: 'Help',
    path: '',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
