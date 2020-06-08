import classNames from 'classnames';
import React, {ReactNode} from 'react';
import './CompletionScreen.scss';

type CompletionScreenProps = {
  /** Action button or links to be displayed at the bottom of the screen */
  actions: ReactNode;
  /** Additional class names to apply */
  className?: string;
  /** Screen description */
  description?: ReactNode;
  /** Feature image or content to be displayed at the top */
  feature?: ReactNode;
  /** Screen title */
  title: ReactNode;
};

const CompletionScreen = ({
  title,
  description,
  actions,
  feature,
  className,
}: CompletionScreenProps): JSX.Element => {
  const containerClass = classNames(
    {
      'uic--mcg-completion-screen': true,
      'uic--align-items-center': true,
      'uic--d-flex': true,
      'uic--flex-column': true,
      'uic--justify-content-center': true,
      'uic--w-100': true,
    },
    className,
  );

  return (
    <div className={containerClass}>
      {feature && <div className="uic--feature">{feature}</div>}
      <h2>{title}</h2>
      <p className="uic--text-center">{description}</p>
      <div className="uic--actions uic--d-flex uic--flex-column uic--align-items-center">
        {actions}
      </div>
    </div>
  );
};

export default CompletionScreen;
