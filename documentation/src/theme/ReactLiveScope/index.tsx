import React from 'react';
import { LOGO } from '../../constants';
import Avatar, { AvatarGroup } from '@flexnative/avatar';
import Button from '@flexnative/buttons';
import Icon, { Spinner } from '@flexnative/icons';
import BottomSheet from "@flexnative/bottom-sheet";
import Tag from '@flexnative/tags';
import Badge from '@flexnative/badges';
import SkeletonLoader, { Circle, Rect } from '@flexnative/skeleton-loading';
import { TextBox, NumericTextBox, Check, CheckList } from '@flexnative/inputs';
import Message from "@flexnative/messages";
import { Block } from '@flexnative/layout'; 


// Add react-live imports you need here
const ReactLiveScope: any = {
  React,
  ...React,
  Avatar,
  AvatarGroup,
  Button,
  Icon,
  Spinner,
  BottomSheet,
  Tag,
  Badge,
  SkeletonLoader,
  Circle,
  Rect,
  TextBox,
  NumericTextBox,
  Check,
  CheckList,
  Message,
  Block,
  LOGO
};

export default ReactLiveScope;
