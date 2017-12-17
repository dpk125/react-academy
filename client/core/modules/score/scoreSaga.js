import { takeLatest, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { setScore } from './scoreActions';
import { endSession } from '../session/sessionActions';
import { calculateHandScore } from '../../helpers/handScoreCalculator';

export function* onUpdateScore() {
  const { cards } = yield select();
  const newScore = calculateHandScore(cards);

  yield put(setScore(newScore));
  if (newScore >= 21) yield put(endSession());
}

export default function* scoreSaga() {
  yield all([
    takeLatest(constants.cards.ADD, onUpdateScore),
  ]);
}
