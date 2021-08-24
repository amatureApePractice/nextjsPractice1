import classes from './logistics-item.module.css';

export default function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
    </li>
  );
}

