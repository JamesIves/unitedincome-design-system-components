/** @module PaginatedTile */
import classNames from 'classnames';
import React, {FC, useState} from 'react';
import './PaginatedTile.scss';
import Tile, {TileProps} from '~components/atoms/Tile/Tile';
import Button from '~components/atoms/Button/Button';
import CaretIcon from '~components/atoms/icons/CaretIcon/CaretIcon';
import {colors} from '~constants/js/colors';

type PaginatedTileProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** Determines if the navigation tile should be dark or not. */
  isDark?: boolean;
  tileProps?: TileProps;
  /** The tile items.
   * This can contain items to be rendered in ListTemplate.
   * If not, this can be JSX elements that can be readily rendered.
   */
  items: any[];
  /** Template used to render a list of items*/
  ListTemplate?: React.ComponentType<{paginatedItems: any[]}>;
  itemsPerPage: number;
};

const PaginatedTile: FC<PaginatedTileProps> = ({
  className,
  style,
  items,
  isDark,
  ListTemplate,
  tileProps,
  itemsPerPage,
}): JSX.Element => {
  const [page, setPage] = useState(0);

  const containerClasses = classNames(
    {
      'uic--paginated-tile': true,
    },
    className,
  );

  return (
    <div className={containerClasses} style={style}>
      <Tile
        isDark={isDark}
        {...tileProps}
        footerContent={
          <PageFooter
            footerContent={tileProps?.footerContent}
            page={page}
            numberOfItems={items.length}
            itemsPerPage={itemsPerPage}
            previous={() => setPage(page - 1)}
            next={() => setPage(page + 1)}
          />
        }
      >
        <Page
          items={items}
          page={page}
          itemsPerPage={itemsPerPage}
          ListTemplate={ListTemplate}
        />
      </Tile>
    </div>
  );
};
PaginatedTile.defaultProps = {
  className: 'uic--default-placeholder',
  itemsPerPage: 1,
};

type PageFooterProps = {
  footerContent?: React.ReactNode;
  page: number;
  numberOfItems: number;
  itemsPerPage: number;
  previous: () => void;
  next: () => void;
};
const PageFooter: FC<PageFooterProps> = ({
  footerContent,
  page,
  numberOfItems,
  itemsPerPage,
  previous,
  next,
}): JSX.Element => {
  const previousDisabled = page == 0;
  const nextDisabled = page + 1 == Math.ceil(numberOfItems / itemsPerPage);
  return (
    <div
      className={classNames(
        {'uic--paginated-tile__pagination-only': !footerContent},
        'uic--d-flex uic--paginated-tile__pagination-footer',
      )}
    >
      {footerContent && <div>{footerContent}</div>}
      <div className="uic--paginated-tile__pagination-controls">
        <PaginationButton
          disabled={previousDisabled}
          direction="left"
          onClick={previous}
        />
        <PaginationButton
          disabled={nextDisabled}
          direction="right"
          onClick={next}
        />
      </div>
    </div>
  );
};

type PageProps = {
  items: any[];
  page: number;
  itemsPerPage: number;
  ListTemplate?: React.ComponentType<{paginatedItems: any[]}>;
};
const Page: FC<PageProps> = ({
  items,
  page,
  itemsPerPage,
  ListTemplate,
}): JSX.Element => {
  if (!ListTemplate) {
    return items[page];
  }
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return <ListTemplate paginatedItems={items.slice(startIndex, endIndex)} />;
};

type PaginationButtonProps = {
  disabled: boolean;
  onClick: () => void;
  direction: 'right' | 'left';
};
const PaginationButton: FC<PaginationButtonProps> = ({
  disabled,
  onClick,
  direction,
}): JSX.Element => {
  return (
    <Button
      variant="secondary"
      light={true}
      disabled={disabled}
      className="uic--paginated-tile__pagination-button"
      onClick={onClick}
    >
      <CaretIcon
        direction={direction}
        fill={disabled ? 'rgb(122,84,199)' : colors.white}
      />
    </Button>
  );
};

export default PaginatedTile;
