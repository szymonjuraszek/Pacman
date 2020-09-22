package com.szymon.websocket.model.collision;

import com.szymon.websocket.loader.CSVLoader;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FigureCollisionBoard {

    private final String FILE_NAME = "board_path.csv";
    private List<List<Boolean>> board;
    private int sizeX;
    private int sizeY;

    private final CSVLoader csvLoader;

    public FigureCollisionBoard(CSVLoader csvLoader) {
        this.csvLoader = csvLoader;
        this.board = this.csvLoader.loadCollision(FILE_NAME);
        this.sizeX = this.board.get(0).size();
        this.sizeY = this.board.size();
    }

    public List<List<Boolean>> getBoard() {
        return board;
    }

    public void setBoard(List<List<Boolean>> board) {
        this.board = board;
    }

    public int getSizeX() {
        return sizeX;
    }

    public int getSizeY() {
        return sizeY;
    }
}
