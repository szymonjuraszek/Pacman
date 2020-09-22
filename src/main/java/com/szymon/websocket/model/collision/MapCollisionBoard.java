package com.szymon.websocket.model.collision;

import com.szymon.websocket.loader.CSVLoader;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MapCollisionBoard {

    private List<List<Boolean>> board;
    private final String FILE_NAME = "board_background_main.csv";
    private int sizeX;
    private int sizeY;

    private final CSVLoader csvLoader;

    public MapCollisionBoard(CSVLoader csvLoader) {
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
