'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import HeroCard from '@/components/cards/HeroCard';
import SkillsCard from '@/components/cards/SkillsCard';
import AboutCard from '@/components/cards/AboutCard';
import ContactCard from '@/components/cards/ContactCard';
import WorkCard from '@/components/cards/WorkCard';
import ResearchCard from '@/components/cards/ResearchCard';
import HobbyCard from '@/components/cards/HobbyCard';

type ColFr = [number, number, number];
type RowFr = [number, number, number];

const DIVIDER_PX = 8;
const MIN_FR = 0.3;
const DEFAULT_COLS: ColFr = [1.4, 1, 1];
const DEFAULT_ROWS: RowFr = [1, 1, 1];

const CELLS = [
  { Component: HeroCard,     gridColumn: '1',     gridRow: '1 / 3' },
  { Component: SkillsCard,   gridColumn: '2 / 4', gridRow: '1'     },
  { Component: AboutCard,    gridColumn: '2',     gridRow: '2'     },
  { Component: ContactCard,  gridColumn: '3',     gridRow: '2'     },
  { Component: WorkCard,     gridColumn: '1',     gridRow: '3'     },
  { Component: ResearchCard, gridColumn: '2',     gridRow: '3'     },
  { Component: HobbyCard,    gridColumn: '3',     gridRow: '3'     },
] as const;

function toTemplate(frs: number[]) {
  return frs.map(f => `${f}fr`).join(' ');
}

function sumFr(frs: number[], upToIndex: number) {
  let s = 0;
  for (let i = 0; i <= upToIndex; i++) s += frs[i];
  return s;
}

function pct(value: number, total: number) {
  return `${(value / total) * 100}%`;
}

export default function BentoResizable() {
  const [cols, setCols] = useState<ColFr>([...DEFAULT_COLS]);
  const [rows, setRows] = useState<RowFr>([...DEFAULT_ROWS]);
  const [isResizing, setIsResizing] = useState(false);

  const dragging = useRef<{
    type: 'col' | 'row';
    index: number;
    startPos: number;
    startFr: number[];
  } | null>(null);

  const onDividerMouseDown = useCallback(
    (e: React.MouseEvent, type: 'col' | 'row', index: number) => {
      e.preventDefault();
      e.stopPropagation();
      dragging.current = {
        type,
        index,
        startPos: type === 'col' ? e.clientX : e.clientY,
        startFr: type === 'col' ? [...cols] : [...rows],
      };
      setIsResizing(true);
      document.body.classList.add(
        type === 'col' ? 'dragging-col' : 'dragging-row'
      );
    },
    [cols, rows]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const { type, index, startPos, startFr } = dragging.current;
      const totalSize =
        type === 'col' ? window.innerWidth : window.innerHeight;
      const totalFr = startFr.reduce((a, b) => a + b, 0);
      const delta = (type === 'col' ? e.clientX : e.clientY) - startPos;
      const deltaFr = (delta / totalSize) * totalFr;

      const newFr = [...startFr];
      newFr[index]     = Math.max(MIN_FR, startFr[index] + deltaFr);
      newFr[index + 1] = Math.max(MIN_FR, startFr[index + 1] - deltaFr);

      if (type === 'col') setCols(newFr as ColFr);
      else setRows(newFr as RowFr);
    };

    const onMouseUp = () => {
      if (dragging.current) {
        document.body.classList.remove('dragging-col', 'dragging-row');
        dragging.current = null;
        setIsResizing(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const resetLayout = useCallback(() => {
    setCols([...DEFAULT_COLS]);
    setRows([...DEFAULT_ROWS]);
  }, []);

  const totalCol = cols.reduce((a, b) => a + b, 0);
  const totalRow = rows.reduce((a, b) => a + b, 0);

  // Pixel offset of each column divider, expressed as CSS calc() string
  const colLeft = (i: number) =>
    `calc(${pct(sumFr(cols, i), totalCol)} - ${DIVIDER_PX / 2}px)`;
  const rowTop = (i: number) =>
    `calc(${pct(sumFr(rows, i), totalRow)} - ${DIVIDER_PX / 2}px)`;

  // Row-0 divider sits between row 1 and row 2; Hero occupies col 1 in both,
  // so the divider only spans cols 2-3.
  const col1Pct = pct(cols[0], totalCol);
  const cols23Pct = pct(cols[1] + cols[2], totalCol);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: toTemplate(cols),
        gridTemplateRows: toTemplate(rows),
        borderTop: '0.5px solid #111',
        borderLeft: '0.5px solid #111',
        // grid-template cannot be CSS-transitioned in most browsers,
        // but we toggle it so it's ready when support lands.
        transition: isResizing
          ? 'none'
          : 'grid-template-columns 0.1s ease, grid-template-rows 0.1s ease',
      }}
      onDoubleClick={resetLayout}
    >
      {/* ── 7 content cells ── */}
      {CELLS.map(({ Component, gridColumn, gridRow }, idx) => (
        <div
          key={idx}
          style={{
            gridColumn,
            gridRow,
            overflow: 'hidden',
            borderRight: '0.5px solid #111',
            borderBottom: '0.5px solid #111',
            minWidth: 0,
            minHeight: 0,
          }}
        >
          <Component />
        </div>
      ))}

      {/* ── Column dividers ── */}
      {([0, 1] as const).map(i => (
        <div
          key={`col-${i}`}
          className="bento-divider"
          onMouseDown={e => onDividerMouseDown(e, 'col', i)}
          style={{
            position: 'absolute',
            top: 0,
            left: colLeft(i),
            width: DIVIDER_PX,
            height: '100%',
            cursor: 'col-resize',
            zIndex: 50,
            pointerEvents: 'auto',
            display: 'flex',
            justifyContent: 'center',
            userSelect: 'none',
          }}
        >
          <div
            className="divider-line"
            style={{ width: 2, height: '100%', background: 'transparent' }}
          />
        </div>
      ))}

      {/* ── Row divider 0: between row 1 & 2, cols 2-3 only ── */}
      <div
        className="bento-divider"
        onMouseDown={e => onDividerMouseDown(e, 'row', 0)}
        style={{
          position: 'absolute',
          left: col1Pct,
          top: rowTop(0),
          width: cols23Pct,
          height: DIVIDER_PX,
          cursor: 'row-resize',
          zIndex: 50,
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          userSelect: 'none',
        }}
      >
        <div
          className="divider-line"
          style={{ width: '100%', height: 2, background: 'transparent' }}
        />
      </div>

      {/* ── Row divider 1: between row 2 & 3, full width ── */}
      <div
        className="bento-divider"
        onMouseDown={e => onDividerMouseDown(e, 'row', 1)}
        style={{
          position: 'absolute',
          left: 0,
          top: rowTop(1),
          width: '100%',
          height: DIVIDER_PX,
          cursor: 'row-resize',
          zIndex: 50,
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          userSelect: 'none',
        }}
      >
        <div
          className="divider-line"
          style={{ width: '100%', height: 2, background: 'transparent' }}
        />
      </div>
    </div>
  );
}
